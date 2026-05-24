import React, { useState } from 'react';
import { highlight } from '../utils/highlight.js';
import { ACCENT, FILE_NAME } from '../utils/constants.js';

export default function CodeEditor({ code, language, editable = false, onChange }) {
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState(code);

  const accent = ACCENT[language];
  const fileName = FILE_NAME[language];
  const displayCode = editable ? value : code;
  const lines = displayCode.split('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{
      background: '#060c18',
      border: '1px solid var(--border)',
      borderRadius: 4, overflow: 'hidden',
      fontFamily: 'var(--font-mono)',
    }}>
      {/* Editor header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 14px',
        background: 'rgba(0,0,0,0.3)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff2d55', opacity: 0.8 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff9500', opacity: 0.8 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#00ff88', opacity: 0.8 }} />
        </div>
        <span style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
          {fileName}
        </span>
        <button
          onClick={handleCopy}
          style={{
            background: 'transparent',
            border: `1px solid ${copied ? accent : 'var(--border)'}`,
            borderRadius: 2, padding: '3px 10px', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em',
            color: copied ? accent : 'var(--text-muted)',
            transition: 'all 0.2s',
          }}
        >
          {copied ? 'COPIED!' : 'COPY'}
        </button>
      </div>

      {/* Code body */}
      <div style={{ position: 'relative', display: 'flex', overflow: 'auto', maxHeight: 400 }}>
        {/* Line numbers */}
        <div style={{
          padding: '16px 0', background: 'rgba(0,0,0,0.2)',
          borderRight: '1px solid var(--border)',
          userSelect: 'none', flexShrink: 0,
        }}>
          {lines.map((_, i) => (
            <div key={i} style={{
              padding: '0 12px', lineHeight: '1.7rem',
              fontSize: 12, color: 'var(--text-muted)',
              textAlign: 'right', minWidth: 40,
            }}>
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code / textarea */}
        {editable ? (
          <textarea
            value={value}
            onChange={e => { setValue(e.target.value); onChange && onChange(e.target.value); }}
            style={{
              flex: 1, padding: '16px', margin: 0,
              background: 'transparent', border: 'none', outline: 'none',
              fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '1.7rem',
              color: 'var(--text-primary)', resize: 'none',
              minHeight: `${lines.length * 27.2 + 32}px`,
              caretColor: accent,
            }}
            spellCheck={false}
          />
        ) : (
          <pre style={{
            flex: 1, padding: '16px', margin: 0, overflow: 'visible',
            fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '1.7rem',
            color: 'var(--text-primary)',
          }}>
            <code dangerouslySetInnerHTML={{ __html: highlight(displayCode, language) }} />
          </pre>
        )}
      </div>
    </div>
  );
}
