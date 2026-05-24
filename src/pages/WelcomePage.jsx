import React, { useEffect, useState } from 'react';
import MatrixRain from '../components/MatrixRain.jsx';
import GlitchTitle from '../components/GlitchTitle.jsx';
import LanguageCard from '../components/LanguageCard.jsx';
import { LANGUAGE_CARDS } from '../data/languageCards.js';

export default function WelcomePage({ onSelectLanguage }) {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      position: 'relative', width: '100vw', height: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: 'var(--bg-primary)',
    }}>
      <MatrixRain />

      {/* Radial glow center */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{
        position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: 56,
        opacity: titleVisible ? 1 : 0,
        transform: titleVisible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.3em',
          color: 'var(--text-muted)', marginBottom: 16, textTransform: 'uppercase',
        }}>
          <span style={{ color: 'var(--accent-cyan)' }}>▸</span> CYBERCODE LEARNING SYSTEM v2.0
        </div>

        <GlitchTitle text="CYBERCODE" />

        <div style={{
          fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: 18,
          color: 'var(--text-secondary)', letterSpacing: '0.2em',
          marginTop: 8, textTransform: 'uppercase',
        }}>
          SELECT YOUR LANGUAGE / BEGIN TRAINING
        </div>

        <div style={{
          margin: '20px auto 0', width: 200, height: 1,
          background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
          opacity: 0.5,
        }} />
      </div>

      {/* Cards */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center',
        padding: '0 20px',
      }}>
        {LANGUAGE_CARDS.map((lang, i) => (
          <LanguageCard
            key={lang.id}
            lang={lang}
            onSelect={onSelectLanguage}
            delay={300 + i * 150}
          />
        ))}
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute', bottom: 24, zIndex: 1,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--text-muted)', letterSpacing: '0.15em',
        display: 'flex', gap: 32, alignItems: 'center',
      }}>
        <span>SYS:ONLINE</span>
        <span style={{ color: 'var(--accent-cyan)', animation: 'blink 1.5s infinite' }}>■</span>
        <span>MODULES: C // PYTHON</span>
        <span style={{ color: 'var(--accent-cyan)', animation: 'blink 1.5s infinite' }}>■</span>
        <span>STATUS: READY</span>
      </div>
    </div>
  );
}
