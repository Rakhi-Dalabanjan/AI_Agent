import { useRef, useEffect, useState } from 'react';

/**
 * ChromaKeyVideo Component
 * Renders a video on a canvas, removing the background (green screen or black)
 * to achieve true transparency using high-performance pixel manipulation.
 */
export function ChromaKeyVideo({
  src,
  className,
  style,
  similarity = 0.4,
  smoothness = 0.08,
  keyColor = [0, 255, 0], // Default green screen key
  autoDetectKeyColor = true,
  maxWidth = 800, // Resolution cap for performance
  isCheckerboard = false,
}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 640, height: 360 });
  const detectedKeyColorRef = useRef(null);

  // Explicitly play video to bypass autoplay restrictions
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play().catch(err => {
        console.warn("Autoplay blocked. Video will play on user interaction:", err);
      });
    };

    if (video.readyState >= 1) {
      attemptPlay();
    } else {
      video.addEventListener('loadedmetadata', attemptPlay);
    }

    const handleInteraction = () => {
      if (video.paused) {
        attemptPlay();
      }
    };
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', attemptPlay);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [src]);

  // Frame processing loop
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let animationFrameId;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const processFrame = () => {
      animationFrameId = requestAnimationFrame(processFrame);

      if (video.paused || video.ended || video.readyState < 2) {
        return;
      }

      const { width, height } = canvas;
      if (width === 0 || height === 0) {
        return;
      }

      try {
        ctx.drawImage(video, 0, 0, width, height);

        const frame = ctx.getImageData(0, 0, width, height);
        const data = frame.data;
        const len = data.length;

        // Auto-detect background type on first valid frame once video starts playing
        if (autoDetectKeyColor && !detectedKeyColorRef.current && video.currentTime > 0) {
          const sampleOffset = (5 * width + 5) * 4;
          if (sampleOffset < len) {
            detectedKeyColorRef.current = [data[sampleOffset], data[sampleOffset + 1], data[sampleOffset + 2]];
          }
        }

        const activeKeyColor = detectedKeyColorRef.current || keyColor;
        const rk = activeKeyColor[0];
        const gk = activeKeyColor[1];
        const bk = activeKeyColor[2];

        // Determine keying mode based on key color brightness
        const isBlackKey = rk < 45 && gk < 45 && bk < 45;

        if (isCheckerboard || (src && (src.includes('AI_chatbot_traini') || src.includes('chatbot_training')))) {
          let x = 0;
          let y = 0;
          for (let i = 0; i < len; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            const xPct = x / width;
            const yPct = y / height;

            // 1. Watermark Star Removal (X: 90%..95%, Y: 82%..91% in percentage terms)
            if (xPct >= 0.90 && xPct <= 0.95 && yPct >= 0.82 && yPct <= 0.91) {
              data[i + 3] = 0;
            } 
            // 2. Checkerboard background keying
            else {
              const rgDiff = Math.abs(r - g);
              const rbDiff = Math.abs(r - b);
              const gbDiff = Math.abs(g - b);
              
              const isBaseGrey = r >= 38 && r <= 140 && rgDiff <= 8 && rbDiff <= 18 && gbDiff <= 18;
              const isDarkGrey = r < 38 && g < 38 && b < 38 && rgDiff <= 4 && rbDiff <= 4;
              
              if (isBaseGrey || isDarkGrey) {
                const isInRobotRegion = xPct >= 0.34 && xPct <= 0.66 && yPct >= 0.59;
                if (isDarkGrey && isInRobotRegion) {
                  // Keep opaque
                } else {
                  data[i + 3] = 0;
                }
              }
            }

            x++;
            if (x >= width) {
              x = 0;
              y++;
            }
          }
        } else if (isBlackKey) {
          // Black keying using RGB Euclidean distance
          const maxRGBDist = 441.67;
          // We use a slightly smaller similarity scale for black keying to protect dark parts of the subject
          const adjustedSimilarity = similarity * 0.45;
          const similarityRaw = adjustedSimilarity * maxRGBDist;
          const similaritySq = similarityRaw * similarityRaw;
          const smoothnessRaw = smoothness * maxRGBDist;
          const similaritySmoothSq = (similarityRaw + smoothnessRaw) * (similarityRaw + smoothnessRaw);

          for (let i = 0; i < len; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            const dr = r - rk;
            const dg = g - gk;
            const db = b - bk;
            const distSq = dr * dr + dg * dg + db * db;

            if (distSq < similaritySq) {
              // Background pixel: make completely transparent
              data[i + 3] = 0;
            } else if (distSq >= similaritySmoothSq) {
              // Subject pixel: keep fully opaque
            } else {
              // Soft transition edge
              const dist = Math.sqrt(distSq);
              const alpha = (dist - similarityRaw) / smoothnessRaw;
              data[i + 3] = Math.max(0, Math.min(255, Math.round(alpha * 255)));
            }
          }
        } else {
          // Standard Chroma Keying (e.g. green screen) using YCbCr color distance
          const rkNorm = rk / 255;
          const gkNorm = gk / 255;
          const bkNorm = bk / 255;
          const yk = 0.2989 * rkNorm + 0.587 * gkNorm + 0.114 * bkNorm;
          const cbKey = 0.5647 * (bkNorm - yk) * 255;
          const crKey = 0.7132 * (rkNorm - yk) * 255;

          const similarityRaw = similarity * 255;
          const similaritySq = similarityRaw * similarityRaw;
          const smoothnessRaw = smoothness * 255;
          const similaritySmoothSq = (similarityRaw + smoothnessRaw) * (similarityRaw + smoothnessRaw);

          for (let i = 0; i < len; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // YCbCr Conversion
            const y = 0.2989 * r + 0.587 * g + 0.114 * b;
            const cb = 0.5647 * (b - y);
            const cr = 0.7132 * (r - y);

            // Calculate distance squared in chroma space
            const cbVal = cb - cbKey;
            const crVal = cr - crKey;
            const distSq = cbVal * cbVal + crVal * crVal;

            if (distSq < similaritySq) {
              data[i + 3] = 0;
            } else if (distSq >= similaritySmoothSq) {
              // Keep opaque
            } else {
              const dist = Math.sqrt(distSq);
              const alpha = (dist - similarityRaw) / smoothnessRaw;
              data[i + 3] = Math.max(0, Math.min(255, Math.round(alpha * 255)));
            }

            // Green spill suppression
            const spillThreshold = similaritySmoothSq * 2.0;
            if (distSq < spillThreshold) {
              const avg = (r + b) / 2;
              if (g > avg) {
                const dist = Math.sqrt(distSq);
                const factor = 1.0 - (dist - similarityRaw) / (smoothnessRaw * 2);
                if (factor > 0) {
                  const f = Math.max(0, Math.min(1, factor));
                  data[i + 1] = Math.round(g * (1 - f) + avg * f);
                }
              }
            }
          }
        }

        ctx.putImageData(frame, 0, 0);
      } catch (err) {
        console.error("Chroma key frame processing error:", err);
      }
    };

    animationFrameId = requestAnimationFrame(processFrame);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [similarity, smoothness, keyColor, autoDetectKeyColor, dimensions]);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;

    let w = video.videoWidth;
    let h = video.videoHeight;

    if (w > maxWidth) {
      const ratio = maxWidth / w;
      w = maxWidth;
      h = Math.round(video.videoHeight * ratio);
    }

    setDimensions({ width: w, height: h });
  };

  return (
    <div className={className} style={{ position: 'relative', width: '100%', height: '100%', ...style }}>
      {/* Offscreen video decoder */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
          top: '-9999px',
          left: '-9999px',
        }}
      />
      {/* Target Canvas display */}
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}
