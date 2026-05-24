'use client';
import { useEffect, useRef, useState } from 'react';

const L0_NORMAL = 'Immobilien mit ';
const L0_ITALIC = 'Haltung.';
const L1_NORMAL = 'Verwaltung mit ';
const L1_ITALIC = 'Vorsprung.';

const TOTAL_L0 = L0_NORMAL.length + L0_ITALIC.length;
const TOTAL_L1 = L1_NORMAL.length + L1_ITALIC.length;

// organic timing: base speed + slight human jitter
const speed = () => 56 + (Math.random() * 28 - 14);
const LINE_GAP = 460;   // pause between the two lines
const START_DELAY = 320; // wait before first keystroke
const CURSOR_LINGER = 2600; // cursor stays after last char

function renderLine(normalStr, italicStr, charCount) {
  const nc = Math.min(charCount, normalStr.length);
  const ic = Math.max(0, charCount - normalStr.length);
  return (
    <>
      {normalStr.slice(0, nc)}
      {ic > 0 && <em>{italicStr.slice(0, ic)}</em>}
    </>
  );
}

export default function HeroTypewriter() {
  // start with full text for SSR / static HTML (SEO)
  const [c0, setC0] = useState(TOTAL_L0);
  const [c1, setC1] = useState(TOTAL_L1);
  const [cursorVisible, setCursorVisible] = useState(false);
  const tmRef = useRef(null);

  useEffect(() => {
    // reset and start animation
    setC0(0);
    setC1(-1);
    setCursorVisible(true);

    let cur0 = 0;
    let cur1 = -1;

    function tick() {
      if (cur0 < TOTAL_L0) {
        cur0++;
        setC0(cur0);
        tmRef.current = setTimeout(tick, speed());

      } else if (cur1 < 0) {
        // gap between lines
        tmRef.current = setTimeout(() => {
          cur1 = 0;
          setC1(0);
          tmRef.current = setTimeout(tick, speed());
        }, LINE_GAP);

      } else if (cur1 < TOTAL_L1) {
        cur1++;
        setC1(cur1);
        if (cur1 < TOTAL_L1) {
          tmRef.current = setTimeout(tick, speed());
        } else {
          // done — let cursor linger then fade
          tmRef.current = setTimeout(() => setCursorVisible(false), CURSOR_LINGER);
        }
      }
    }

    tmRef.current = setTimeout(tick, START_DELAY);
    return () => clearTimeout(tmRef.current);
  }, []);

  const cursorOnLine0 = c1 < 0; // during line-0 typing and inter-line gap
  const cursorOnLine1 = c1 >= 0;

  return (
    <h1 className="t-display hero-title">
      <span className="hero-line" style={{ display: 'block' }}>
        {renderLine(L0_NORMAL, L0_ITALIC, c0)}
        {cursorVisible && cursorOnLine0 && (
          <span className="hero-cursor" aria-hidden="true" />
        )}
      </span>

      {c1 >= 0 && (
        <span className="hero-line" style={{ display: 'block' }}>
          {renderLine(L1_NORMAL, L1_ITALIC, c1)}
          {cursorVisible && cursorOnLine1 && (
            <span className="hero-cursor" aria-hidden="true" />
          )}
        </span>
      )}
    </h1>
  );
}
