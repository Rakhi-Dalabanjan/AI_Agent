import { useState } from 'react';

/**
 * WalkingBot Component
 * A premium floating helper robot that walks across the bottom of the screen
 * on page load and presents a glowing round free trial button.
 */
export function WalkingBot() {
  const [isWalking, setIsWalking] = useState(true);

  return (
    <div className="walking-bot-container">
      <div
        className={`walking-bot-mover ${isWalking ? 'walking' : 'idle'}`}
        onAnimationEnd={(e) => {
          if (e.animationName === 'walk-across') {
            setIsWalking(false);
          }
        }}
      >
        <div className="walking-bot-body-bob">
          <div
            className="bot-visual open-modal"
            data-modal-title="Start Free Trial"
            aria-label="AI Bot Assistant"
          >
            <div className="bot-head">
              <div className="bot-antenna"></div>
              <div className="bot-face">
                <div className="bot-eye left"></div>
                <div className="bot-eye right"></div>
              </div>
            </div>
            <div className="bot-body">
              <div className="bot-chest"></div>
            </div>
            <div className="bot-arm left"></div>
            <div className="bot-arm right"></div>
            <div className="bot-leg left">
              <div className="bot-foot"></div>
            </div>
            <div className="bot-leg right">
              <div className="bot-foot"></div>
            </div>
          </div>
          <div className="bot-shadow"></div>
          <button
            className="bot-trial-bubble open-modal"
            data-modal-title="Start Free Trial"
            aria-label="Start Free Trial"
          >
            <i className="fa-solid fa-gift"></i>
            <span className="tooltip-text">Start Free Trial</span>
          </button>
        </div>
      </div>
    </div>
  );
}

