import React, { useState } from 'react';
import LessonContent from './LessonContent.jsx';
import { ACCENT } from '../utils/constants.js';

const TABS = [
  { id: 'lesson', label: 'LESSON' },
  { id: 'notes', label: 'NOTES' },
];

export default function LessonView({ lesson, language, onNext, onPrev, hasNext, hasPrev, onMarkComplete }) {
  const [tab, setTab] = useState('lesson');
  const accent = ACCENT[language];

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      height: '100vh', overflow: 'hidden',
      background: 'var(--bg-primary)',
    }}>
      {/* Top bar */}
      <div style={{
        borderBottom: '1px solid var(--border)',
        padding: '0 32px',
        background: 'var(--bg-secondary)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        minHeight: 64, flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                background: 'transparent', border: 'none',
                borderBottom: tab === t.id ? `2px solid ${accent}` : '2px solid transparent',
                padding: '20px 0', cursor: 'pointer',
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: tab === t.id ? accent : 'var(--text-muted)',
                transition: 'all 0.2s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <button
          onClick={onMarkComplete}
          style={{
            background: lesson.completed ? accent : 'transparent',
            border: `1px solid ${lesson.completed ? accent : 'var(--border)'}`,
            borderRadius: 2, padding: '7px 18px', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
            color: lesson.completed ? 'var(--bg-primary)' : 'var(--text-muted)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { if (!lesson.completed) { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; } }}
          onMouseLeave={e => { if (!lesson.completed) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; } }}
        >
          {lesson.completed ? '✓ COMPLETED' : 'MARK COMPLETE'}
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '36px 40px 40px' }}>
        {tab === 'lesson' ? (
          <>
            <div style={{ marginBottom: 32, animation: 'fadeIn 0.4s ease' }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.25em',
                color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8,
              }}>
                <span style={{ color: accent }}>▸</span>{' '}
                {language === 'c' ? 'C PROGRAMMING' : 'PYTHON'} / LESSON
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32,
                color: 'var(--text-primary)', lineHeight: 1.2,
                letterSpacing: '-0.01em', marginBottom: 12,
              }}>
                {lesson.title}
              </h1>
              {lesson.description && (
                <p style={{
                  fontFamily: 'var(--font-ui)', fontSize: 15,
                  color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 600,
                }}>
                  {lesson.description}
                </p>
              )}
              <div style={{
                marginTop: 16, height: 1, maxWidth: 400,
                background: `linear-gradient(90deg, ${accent}, transparent)`,
                opacity: 0.3,
              }} />
            </div>
            <LessonContent lesson={lesson} language={language} />
          </>
        ) : (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22,
              color: 'var(--text-primary)', marginBottom: 16,
            }}>
              Your Notes
            </h2>
            <textarea
              placeholder="Take notes on this lesson..."
              style={{
                width: '100%', minHeight: 300,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 4, padding: 20,
                fontFamily: 'var(--font-ui)', fontSize: 14, lineHeight: 1.7,
                color: 'var(--text-primary)', resize: 'vertical', outline: 'none',
                caretColor: accent,
              }}
              onFocus={e => (e.target.style.borderColor = accent)}
              onBlur={e => (e.target.style.borderColor = 'var(--border)')}
            />
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{
        borderTop: '1px solid var(--border)',
        padding: '14px 32px',
        background: 'var(--bg-secondary)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexShrink: 0,
      }}>
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          style={{
            background: 'transparent',
            border: `1px solid ${hasPrev ? 'var(--border)' : 'rgba(255,255,255,0.05)'}`,
            borderRadius: 2, padding: '9px 20px',
            cursor: hasPrev ? 'pointer' : 'not-allowed',
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
            color: hasPrev ? 'var(--text-secondary)' : 'var(--text-muted)',
            opacity: hasPrev ? 1 : 0.4, transition: 'all 0.2s',
          }}
          onMouseEnter={e => hasPrev && (e.currentTarget.style.borderColor = accent)}
          onMouseLeave={e => hasPrev && (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          ← PREV
        </button>

        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--text-muted)', letterSpacing: '0.1em',
        }}>
          <span style={{ color: accent }}>
            {lesson.title.substring(0, 22)}{lesson.title.length > 22 ? '…' : ''}
          </span>
        </div>

        <button
          onClick={onNext}
          disabled={!hasNext}
          style={{
            background: hasNext ? accent : 'transparent',
            border: `1px solid ${hasNext ? accent : 'rgba(255,255,255,0.05)'}`,
            borderRadius: 2, padding: '9px 20px',
            cursor: hasNext ? 'pointer' : 'not-allowed',
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
            color: hasNext ? 'var(--bg-primary)' : 'var(--text-muted)',
            fontWeight: 700,
            opacity: hasNext ? 1 : 0.4, transition: 'all 0.2s',
          }}
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}
