import React from 'react';
import CodeEditor from './CodeEditor.jsx';
import { ACCENT } from '../utils/constants.js';

export default function LessonContent({ lesson, language }) {
  const accent = ACCENT[language];

  const renderBlock = (block, idx) => {
    switch (block.type) {
      case 'text':
        return (
          <p key={idx} style={{
            fontFamily: 'var(--font-ui)', fontSize: 15, lineHeight: 1.8,
            color: 'var(--text-secondary)', marginBottom: 16,
          }}>
            {block.content}
          </p>
        );

      case 'heading':
        return (
          <div key={idx} style={{ marginBottom: 16, marginTop: idx > 0 ? 28 : 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 3, height: 20, background: accent, borderRadius: 2, flexShrink: 0 }} />
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18,
                color: 'var(--text-primary)', letterSpacing: '0.02em',
              }}>
                {block.content}
              </h3>
            </div>
          </div>
        );

      case 'code':
        return (
          <div key={idx} style={{ marginBottom: 20, marginTop: 4 }}>
            <CodeEditor code={block.content} language={language} />
          </div>
        );

      case 'note':
        return (
          <div key={idx} style={{
            marginBottom: 16, padding: '12px 16px',
            background: language === 'c'
              ? 'linear-gradient(90deg, rgba(255,107,0,0.08), transparent)'
              : 'linear-gradient(90deg, rgba(0,255,136,0.08), transparent)',
            border: `1px solid ${accent}`,
            borderLeft: `3px solid ${accent}`,
            borderRadius: 2,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em',
              color: accent, marginBottom: 6, textTransform: 'uppercase',
            }}>
              NOTE
            </div>
            <p style={{
              fontFamily: 'var(--font-ui)', fontSize: 14,
              lineHeight: 1.7, color: 'var(--text-secondary)',
            }}>
              {block.content}
            </p>
          </div>
        );

      case 'list':
        return (
          <ul key={idx} style={{ margin: '0 0 16px 0', padding: '0 0 0 4px', listStyle: 'none' }}>
            {block.items.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                <span style={{ color: accent, fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 2, flexShrink: 0 }}>▸</span>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease forwards' }}>
      {lesson.content.map((block, idx) => renderBlock(block, idx))}
    </div>
  );
}
