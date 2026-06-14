import React from 'react';

export default function GlitchTitle({ text }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Main text */}
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(3rem, 8vw, 7rem)',
        color: 'var(--accent-cyan)', letterSpacing: '-0.02em',
        textShadow: '0 0 40px rgba(0,245,255,0.6), 0 0 80px rgba(0,245,255,0.2)',
        animation: 'flicker 8s infinite',
        display: 'block',
      }}>
        {text}
      </span>

      {/* Glitch layer */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0,
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          color: 'var(--accent-orange)', letterSpacing: '-0.02em',
          opacity: 0.3,
          animation: 'glitch 6s infinite',
          clipPath: 'inset(40% 0 50% 0)',
          transform: 'translateX(3px)',
          display: 'block',
          pointerEvents: 'none',
        }}
      >
        {text}
      </span>
    </div>
  );
}
