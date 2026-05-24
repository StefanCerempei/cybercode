import React, { useState } from 'react';
import { ACCENT, LABEL } from '../utils/constants.js';

export default function Sidebar({ language, lessons, currentLesson, onSelectLesson, onBack }) {
  const [collapsed, setCollapsed] = useState(false);

  const accent = ACCENT[language];
  const label = LABEL[language];
  const completedCount = lessons.filter(l => l.completed).length;

  return (
    <div style={{
      width: collapsed ? 56 : 260,
      minWidth: collapsed ? 56 : 260,
      height: '100vh',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      transition: 'width 0.3s ease, min-width 0.3s ease',
      overflow: 'hidden', position: 'relative', zIndex: 10,
    }}>
      {/* Header */}
      <div style={{
        padding: collapsed ? '16px 12px' : '16px 20px',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 10, minHeight: 64,
      }}>
        {!collapsed && (
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.2em', color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}>MODULE</span>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 18, color: accent, letterSpacing: '0.05em',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{label}</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(c => !c)}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--text-muted)', fontSize: 16, padding: 4,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? '▶' : '◀'}
        </button>
      </div>

      {/* Back button */}
      {!collapsed && (
        <button
          onClick={onBack}
          style={{
            margin: '12px 16px 8px', padding: '8px 14px',
            background: 'transparent', border: '1px solid var(--border)',
            borderRadius: 2, color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
        >
          ← CHANGE LANGUAGE
        </button>
      )}

      {/* Progress bar */}
      {!collapsed && (
        <div style={{ padding: '8px 16px 12px' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)', fontSize: 10,
            color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: 6,
          }}>
            <span>PROGRESS</span>
            <span style={{ color: accent }}>{completedCount}/{lessons.length}</span>
          </div>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${lessons.length ? (completedCount / lessons.length) * 100 : 0}%`,
              background: accent, borderRadius: 2,
              boxShadow: `0 0 8px ${accent}`,
              transition: 'width 0.4s ease',
            }} />
          </div>
        </div>
      )}

      {/* Lesson list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
        {lessons.map((lesson, idx) => {
          const isActive = currentLesson?.id === lesson.id;
          return (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              title={collapsed ? lesson.title : ''}
              style={{
                width: '100%',
                background: isActive
                  ? `linear-gradient(90deg, ${language === 'c' ? 'rgba(255,107,0,0.12)' : 'rgba(0,255,136,0.12)'}, transparent)`
                  : 'transparent',
                border: 'none',
                borderLeft: isActive ? `3px solid ${accent}` : '3px solid transparent',
                padding: collapsed ? '14px 0' : '12px 16px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
                textAlign: 'left', transition: 'all 0.2s',
                justifyContent: collapsed ? 'center' : 'flex-start',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
            >
              <div style={{
                width: 24, height: 24, borderRadius: 2, flexShrink: 0,
                border: `1px solid ${isActive ? accent : 'rgba(255,255,255,0.1)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: isActive ? accent : 'var(--text-muted)',
                background: lesson.completed ? accent : 'transparent',
                transition: 'all 0.2s',
              }}>
                {lesson.completed ? '✓' : String(idx + 1).padStart(2, '0')}
              </div>
              {!collapsed && (
                <span style={{
                  fontFamily: 'var(--font-ui)', fontWeight: isActive ? 600 : 400,
                  fontSize: 13, color: isActive ? accent : 'var(--text-secondary)',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {lesson.title}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer tag */}
      {!collapsed && (
        <div style={{
          padding: '12px 16px', borderTop: '1px solid var(--border)',
          fontFamily: 'var(--font-mono)', fontSize: 10,
          color: 'var(--text-muted)', letterSpacing: '0.1em',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ color: accent, animation: 'blink 2s infinite' }}>■</span>
          CYBERCODE SYS
        </div>
      )}
    </div>
  );
}
