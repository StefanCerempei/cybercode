import React, { useEffect, useState } from 'react';
import StatBar from './StatBar.jsx';

export default function LanguageCard({ lang, onSelect, delay }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

  return (
    <div
      onClick={() => onSelect(lang.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', cursor: 'pointer',
        background: hovered ? 'rgba(13,21,38,0.95)' : 'rgba(10,15,30,0.8)',
        border: `1.5px solid ${hovered ? lang.accent : 'rgba(0,245,255,0.1)'}`,
        borderRadius: 2,
        padding: '36px 32px',
        width: 320,
        backdropFilter: 'blur(20px)',
        boxShadow: hovered
          ? `0 0 60px ${lang.glowColor}, inset 0 0 30px ${lang.glowColor}`
          : '0 8px 40px rgba(0,0,0,0.5)',
        transform: visible
          ? hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
          : 'translateY(30px) scale(0.97)',
        opacity: visible ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        overflow: 'hidden',
      }}
    >
      {/* Corner decorations */}
      {corners.map(pos => (
        <div key={pos} style={{
          position: 'absolute',
          top: pos.includes('top') ? 8 : 'auto',
          bottom: pos.includes('bottom') ? 8 : 'auto',
          left: pos.includes('left') ? 8 : 'auto',
          right: pos.includes('right') ? 8 : 'auto',
          width: 12, height: 12,
          borderTop: pos.includes('top') ? `2px solid ${lang.accent}` : 'none',
          borderBottom: pos.includes('bottom') ? `2px solid ${lang.accent}` : 'none',
          borderLeft: pos.includes('left') ? `2px solid ${lang.accent}` : 'none',
          borderRight: pos.includes('right') ? `2px solid ${lang.accent}` : 'none',
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.3s',
        }} />
      ))}

      {/* Hover scan line */}
      {hovered && (
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${lang.accent}, transparent)`,
          animation: 'scan-line 1.5s linear infinite',
          opacity: 0.6, top: 0,
        }} />
      )}

      {/* Icon */}
      <div style={{
        color: lang.accent, marginBottom: 20,
        filter: hovered ? `drop-shadow(0 0 12px ${lang.accent})` : 'none',
        transition: 'filter 0.3s',
      }}>
        {lang.icon}
      </div>

      {/* Title */}
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 42, color: lang.accent, lineHeight: 1,
        textShadow: hovered ? `0 0 20px ${lang.accent}` : 'none',
        marginBottom: 4, transition: 'text-shadow 0.3s',
      }}>
        {lang.label}
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em',
        color: 'var(--text-muted)', marginBottom: 16, textTransform: 'uppercase',
      }}>
        {lang.tagline}
      </div>

      <p style={{
        fontFamily: 'var(--font-ui)', fontSize: 14,
        color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 24,
      }}>
        {lang.description}
      </p>

      {/* Stats */}
      <div style={{ marginBottom: 20 }}>
        {lang.stats.map(s => (
          <StatBar key={s.label} label={s.label} value={hovered ? s.value : 0} accent={lang.accent} />
        ))}
      </div>

      {/* Topic tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {lang.topics.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, padding: '3px 8px',
            border: `1px solid ${lang.accent}`, borderRadius: 2,
            color: lang.accent, opacity: 0.8, letterSpacing: '0.1em',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* CTA arrow */}
      <div style={{
        marginTop: 28, display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: 13, color: lang.accent,
        opacity: hovered ? 1 : 0.5, transition: 'opacity 0.3s', letterSpacing: '0.1em',
      }}>
        <span>ENTER</span>
        <span style={{
          fontSize: 18,
          transform: hovered ? 'translateX(6px)' : 'translateX(0)',
          transition: 'transform 0.3s',
        }}>→</span>
      </div>
    </div>
  );
}
