import { useEffect, useState } from 'react';

const WORDS = [
  'Conversations',
  'Workflows',
  'Customer Journeys',
  'Lead Capture',
  'Appointments',
];

const TYPE_DELAY = 90;
const DELETE_DELAY = 45;
const PAUSE_DELAY = 1800;

/**
 * Home hero rotating typewriter (legacy script.js behavior).
 * React-controlled so re-renders do not reset the animated text.
 */
export function HeroTypedCycle() {
  const [text, setText] = useState('');

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId = null;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;

      const word = WORDS[wordIndex];

      if (!deleting) {
        charIndex += 1;
        setText(word.slice(0, charIndex));
        if (charIndex >= word.length) {
          deleting = true;
          timeoutId = setTimeout(tick, PAUSE_DELAY);
          return;
        }
        timeoutId = setTimeout(tick, TYPE_DELAY);
        return;
      }

      charIndex -= 1;
      setText(word.slice(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % WORDS.length;
        charIndex = 0;
      }
      timeoutId = setTimeout(tick, DELETE_DELAY);
    };

    tick();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <span className="gradient-text-purple" data-typed-cycle aria-live="polite">
        {text || '\u00A0'}
      </span>
      <span className="typed-cursor" aria-hidden="true" />
    </>
  );
}
