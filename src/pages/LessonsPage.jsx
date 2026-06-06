import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../components/Sidebar.jsx';
import LessonView from '../components/LessonView.jsx';

export default function LessonsPage({
                                        language,
                                        lessons,
                                        currentLesson,
                                        currentIdx,
                                        onSelectLesson,
                                        onBack,
                                        onNext,
                                        onPrev,
                                        onMarkComplete,
                                    }) {
    const pageTitle = currentLesson
        ? `${currentLesson.title} – CyberCode (${language === 'python' ? 'Python' : 'C'})`
        : `CyberCode – Learn ${language === 'python' ? 'Python' : 'C'}`;

    const pageDescription = currentLesson?.description ||
        `Interactive programming lessons in ${language === 'python' ? 'Python' : 'C'}. Practical exercises, integrated code editor.`;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                background: 'var(--bg-primary)',
            }}>
                {/* Main content area: sidebar + lesson view */}
                <div style={{ display: 'flex', flex: 1 }}>
                    <Sidebar
                        language={language}
                        lessons={lessons}
                        currentLesson={currentLesson}
                        onSelectLesson={onSelectLesson}
                        onBack={onBack}
                    />
                    <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
                        {currentLesson && (
                            <LessonView
                                key={currentLesson.id}
                                lesson={currentLesson}
                                language={language}
                                onNext={onNext}
                                onPrev={onPrev}
                                hasNext={currentIdx < lessons.length - 1}
                                hasPrev={currentIdx > 0}
                                onMarkComplete={onMarkComplete}
                            />
                        )}
                    </div>
                </div>

                {/* ===== FULL-WIDTH FOOTER (LAST ELEMENT) ===== */}
                <div style={{
                    width: '100%',               // stretches left to right
                    background: 'rgba(0, 5, 10, 0.9)',
                    backdropFilter: 'blur(8px)',
                    borderTop: '1px solid rgba(0, 245, 255, 0.4)',
                    fontFamily: 'var(--font-ui)',
                    textAlign: 'center',
                    padding: '28px 24px 24px',
                    marginTop: '0',
                    boxShadow: '0 -4px 20px rgba(0,0,0,0.5)'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--accent-cyan)', marginBottom: '8px' }}>CYBERCODE</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>© 2025 Cybercode Labs</div>
                            <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Next‑gen cybersecurity training</div>
                        </div>
                        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '12px', textDecoration: 'none', transition: '0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>About</a>
                            <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '12px', textDecoration: 'none', transition: '0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Docs</a>
                            <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '12px', textDecoration: 'none', transition: '0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Community</a>
                            <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '12px', textDecoration: 'none', transition: '0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Support</a>
                        </div>
                        <button onClick={scrollToTop} style={{
                            background: 'rgba(0,245,255,0.1)',
                            border: '1px solid var(--accent-cyan)',
                            color: 'var(--accent-cyan)',
                            padding: '6px 14px',
                            borderRadius: '30px',
                            fontSize: '11px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-mono)',
                            transition: '0.2s'
                        }} onMouseEnter={e => { e.target.style.background = 'rgba(0,245,255,0.3)'; e.target.style.boxShadow = '0 0 8px cyan'; }} onMouseLeave={e => { e.target.style.background = 'rgba(0,245,255,0.1)'; e.target.style.boxShadow = 'none'; }}>
                            ▲ BACK TO TOP
                        </button>
                    </div>
                    <div style={{
                        fontSize: '10px',
                        color: 'rgba(0,245,255,0.5)',
                        borderTop: '1px solid rgba(0,245,255,0.2)',
                        paddingTop: '16px',
                        marginTop: '20px',
                        maxWidth: '1200px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        <span>SYS:ONLINE</span> <span style={{ color: 'var(--accent-cyan)', margin: '0 8px' }}>■</span>
                        <span>MODULES: C // PYTHON</span> <span style={{ color: 'var(--accent-cyan)', margin: '0 8px' }}>■</span>
                        <span>STATUS: READY</span> <span style={{ color: 'var(--accent-cyan)', margin: '0 8px' }}>■</span>
                        <span>UPTIME: 14D 8H 23M</span>
                        <span style={{ display: 'inline-block', marginLeft: '16px' }}>⚡ Encrypted connection</span>
                    </div>
                </div>
            </div>
        </>
    );
}