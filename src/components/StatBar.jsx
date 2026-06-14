import React from 'react';

export default function StatBar({ label, value, accent }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginBottom: 4,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--text-muted)', letterSpacing: '0.1em',
      }}>
        <span>{label}</span>
        <span style={{ color: accent }}>{value}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${value}%`, background: accent,
          borderRadius: 2, boxShadow: `0 0 8px ${accent}`,
          transition: 'width 1s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>
    </div>
  );
}
