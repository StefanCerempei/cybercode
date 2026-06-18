import React, { useState, useEffect } from 'react';
import { ACCENT, LABEL } from '../utils/constants.js';

const TABS = [
    { id: 'lesson', label: '📖 Lesson' },
    { id: 'exercises', label: '✏️ Exercises' },
    { id: 'coding', label: '💻 Code' },
    { id: 'notes', label: '📝 Notes' },
];

export default function Sidebar({
                                    language,
                                    lessons,
                                    currentLesson,
                                    onSelectLesson,
                                    onBack,
                                    activeTab = 'lesson',
                                    onTabChange,
                                    completedExercises = 0,
                                    totalExercises = 0,
                                    isCompleted = false,
                                }) {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const accent = ACCENT[language];
    const label = LABEL[language];
    const completedCount = lessons.filter(l => l.completed).length;

    // Sidebar content (folosit atât pe mobil cât și pe desktop)
    const SidebarContent = () => (
        <>
            {/* Header */}
            <div style={{
                padding: '16px 20px',
                borderBottom: '1px solid rgba(0, 245, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(0,0,0,0.2)',
            }}>
                <div>
                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px',
                        letterSpacing: '0.2em',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                    }}>MODULE</span>
                    <span style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: isMobile ? '18px' : '20px',
                        color: accent,
                        display: 'block',
                    }}>{label}</span>
                </div>
                {isMobile && (
                    <button
                        onClick={() => setIsOpen(false)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-muted)',
                            fontSize: '22px',
                            cursor: 'pointer',
                            padding: '4px 8px',
                        }}
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Back button */}
            <button
                onClick={() => { onBack(); if (isMobile) setIsOpen(false); }}
                style={{
                    margin: '12px 16px 8px',
                    padding: isMobile ? '10px 14px' : '8px 14px',
                    background: 'rgba(0,245,255,0.08)',
                    border: '1px solid var(--accent-cyan)',
                    borderRadius: '8px',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? '12px' : '11px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,245,255,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,245,255,0.08)'; }}
            >
                ← BACK TO HOME
            </button>

            {/* Progress */}
            <div style={{ padding: '12px 16px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? '11px' : '10px',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                }}>
                    <span>PROGRESS</span>
                    <span style={{ color: accent }}>{completedCount}/{lessons.length}</span>
                </div>
                <div style={{
                    height: '4px',
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '100%',
                        width: `${lessons.length ? (completedCount / lessons.length) * 100 : 0}%`,
                        background: accent,
                        borderRadius: '4px',
                        transition: 'width 0.4s ease',
                    }} />
                </div>
            </div>

            {/* TABS */}
            <div style={{
                padding: '8px 12px',
                borderBottom: '1px solid rgba(0, 245, 255, 0.1)',
                marginBottom: '8px',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4px',
                }}>
                    {TABS.map(tab => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => { onTabChange(tab.id); if (isMobile) setIsOpen(false); }}
                                style={{
                                    background: isActive
                                        ? `linear-gradient(135deg, ${accent}30, ${accent}10)`
                                        : 'transparent',
                                    border: isActive
                                        ? `1px solid ${accent}`
                                        : '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: '6px',
                                    padding: isMobile ? '8px 4px' : '10px 6px',
                                    cursor: 'pointer',
                                    color: isActive ? accent : 'var(--text-muted)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: isMobile ? '9px' : '10px',
                                    textAlign: 'center',
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '2px',
                                }}
                                onMouseEnter={e => {
                                    if (!isActive) {
                                        e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)';
                                        e.currentTarget.style.color = 'var(--text-primary)';
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!isActive) {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                    }
                                }}
                            >
                                <span style={{ fontSize: isMobile ? '14px' : '16px' }}>
                                    {tab.label.split(' ')[0]}
                                </span>
                                <span style={{
                                    fontSize: isMobile ? '7px' : '8px',
                                    opacity: 0.7,
                                    letterSpacing: '0.05em',
                                }}>
                                    {tab.label.split(' ').slice(1).join(' ') || tab.label.split(' ')[0]}
                                </span>
                                {tab.id === 'exercises' && totalExercises > 0 && (
                                    <span style={{
                                        fontSize: '7px',
                                        color: completedExercises === totalExercises ? accent : 'var(--text-muted)',
                                        background: 'rgba(0,245,255,0.1)',
                                        padding: '1px 6px',
                                        borderRadius: '10px',
                                        marginTop: '2px',
                                    }}>
                                        {completedExercises}/{totalExercises}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Lesson list */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: isMobile ? '4px 0' : '8px 0',
            }}>
                <div style={{
                    padding: '0 12px 8px 12px',
                    fontSize: isMobile ? '9px' : '10px',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgba(0,245,255,0.05)',
                }}>
                    📚 Lessons
                </div>
                {lessons.map((lesson, idx) => {
                    const isActive = currentLesson?.id === lesson.id;
                    return (
                        <button
                            key={lesson.id}
                            onClick={() => { onSelectLesson(lesson); if (isMobile) setIsOpen(false); }}
                            style={{
                                width: '100%',
                                background: isActive
                                    ? `linear-gradient(90deg, ${language === 'c' ? 'rgba(255,107,0,0.12)' : 'rgba(0,255,136,0.12)'}, transparent)`
                                    : 'transparent',
                                border: 'none',
                                borderLeft: isActive ? `3px solid ${accent}` : '3px solid transparent',
                                padding: isMobile ? '10px 14px' : '10px 16px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                textAlign: 'left',
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={e => {
                                if (!isActive) {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                }
                            }}
                            onMouseLeave={e => {
                                if (!isActive) {
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            <div style={{
                                width: isMobile ? '24px' : '22px',
                                height: isMobile ? '24px' : '22px',
                                borderRadius: '4px',
                                flexShrink: 0,
                                border: `1px solid ${isActive ? accent : 'rgba(255,255,255,0.08)'}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-mono)',
                                fontSize: isMobile ? '10px' : '9px',
                                color: isActive ? accent : 'var(--text-muted)',
                                background: lesson.completed ? accent : 'transparent',
                            }}>
                                {lesson.completed ? '✓' : String(idx + 1).padStart(2, '0')}
                            </div>
                            <span style={{
                                fontFamily: 'var(--font-ui)',
                                fontWeight: isActive ? 600 : 400,
                                fontSize: isMobile ? '13px' : '12px',
                                color: isActive ? accent : 'var(--text-secondary)',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                flex: 1,
                            }}>
                                {lesson.title}
                            </span>
                            {lesson.completed && (
                                <span style={{ color: accent, fontSize: '12px' }}>✓</span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Footer */}
            <div style={{
                padding: '12px 16px',
                borderTop: '1px solid rgba(0, 245, 255, 0.1)',
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(0,0,0,0.2)',
            }}>
                <span style={{ color: accent, animation: 'blink 2s infinite' }}>■</span>
                CYBERCODE SYS
                <span style={{ marginLeft: 'auto', opacity: 0.5 }}>
                    v2.0
                </span>
            </div>
        </>
    );

    // Mobile version
    if (isMobile) {
        return (
            <>
                {/* Hamburger button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        position: 'fixed',
                        top: '10px',
                        left: '10px',
                        zIndex: 1000,
                        background: 'rgba(0, 20, 30, 0.95)',
                        border: '1px solid var(--accent-cyan)',
                        borderRadius: '8px',
                        color: 'var(--accent-cyan)',
                        padding: '8px 10px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    }}
                >
                    ☰
                    <span style={{
                        fontSize: '8px',
                        letterSpacing: '1px',
                        fontWeight: 'bold',
                    }}>
                        MENU
                    </span>
                </button>

                {/* Overlay */}
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.7)',
                            zIndex: 999,
                        }}
                    />
                )}

                {/* Sidebar */}
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: isOpen ? 0 : '-340px',
                    width: '320px',
                    maxWidth: '88%',
                    height: '100vh',
                    background: '#0a0f1e',
                    borderRight: '1px solid rgba(0, 245, 255, 0.15)',
                    zIndex: 1000,
                    transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '4px 0 40px rgba(0,0,0,0.8)',
                }}>
                    <SidebarContent />
                </div>
            </>
        );
    }

    // Desktop version
    return (
        <div style={{
            width: collapsed ? 60 : 280,
            minWidth: collapsed ? 60 : 280,
            height: '100vh',
            background: 'var(--bg-secondary)',
            borderRight: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            transition: 'width 0.3s ease, min-width 0.3s ease',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 10,
            boxShadow: '4px 0 20px rgba(0,0,0,0.3)',
        }}>
            {/* Toggle collapse button */}
            <button
                onClick={() => setCollapsed(c => !c)}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-10px',
                    transform: 'translateY(-50%)',
                    zIndex: 20,
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer',
                    color: 'var(--text-muted)',
                    fontSize: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.borderColor = accent;
                    e.currentTarget.style.color = accent;
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                }}
            >
                {collapsed ? '▶' : '◀'}
            </button>

            {!collapsed ? (
                <SidebarContent />
            ) : (
                // Collapsed view
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px 0',
                    gap: '16px',
                    height: '100%',
                }}>
                    <div style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: '14px',
                        color: accent,
                        writingMode: 'vertical-rl',
                        letterSpacing: '0.1em',
                    }}>
                        {label}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        flex: 1,
                        paddingTop: '20px',
                    }}>
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                style={{
                                    background: activeTab === tab.id
                                        ? `linear-gradient(135deg, ${accent}30, ${accent}10)`
                                        : 'transparent',
                                    border: activeTab === tab.id
                                        ? `1px solid ${accent}`
                                        : '1px solid transparent',
                                    borderRadius: '8px',
                                    padding: '10px 8px',
                                    cursor: 'pointer',
                                    color: activeTab === tab.id ? accent : 'var(--text-muted)',
                                    fontSize: '14px',
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '44px',
                                }}
                                title={tab.label}
                            >
                                {tab.label.split(' ')[0]}
                            </button>
                        ))}
                    </div>
                    <div style={{
                        fontSize: '18px',
                        color: accent,
                    }}>
                        ■
                    </div>
                </div>
            )}
        </div>
    );
}