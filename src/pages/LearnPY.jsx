import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import LessonView from '../components/LessonView.jsx';
import pythonLessons from '../data/pythonLessons.js';
import { useUserProgress } from '../context/UserProgressContext.jsx';

export default function LearnPY() {
    const navigate = useNavigate();
    const { lessonId } = useParams();
    const { progress } = useUserProgress();
    const [activeTab, setActiveTab] = useState('lesson');

    const currentLesson = lessonId
        ? pythonLessons.find(lesson => lesson.id === lessonId)
        : pythonLessons[0];

    const currentIdx = currentLesson
        ? pythonLessons.findIndex(lesson => lesson.id === currentLesson.id)
        : 0;

    // Calculează progresul exercițiilor
    const totalExercises = currentLesson?.exercises?.length || 0;
    const completedExercises = currentLesson?.exercises?.filter(ex =>
        progress['python']?.[currentLesson?.id]?.exercises?.[ex.id]?.completed
    ).length || 0;

    const isCompleted = progress['python']?.[currentLesson?.id]?.completed || false;

    const handleSelectLesson = (lesson) => {
        navigate(`/learn-py/${lesson.id}`);
    };

    const handleBack = () => {
        navigate('/');
    };

    const handleNext = () => {
        if (currentIdx < pythonLessons.length - 1) {
            navigate(`/learn-py/${pythonLessons[currentIdx + 1].id}`);
        }
    };

    const handlePrev = () => {
        if (currentIdx > 0) {
            navigate(`/learn-py/${pythonLessons[currentIdx - 1].id}`);
        }
    };

    const handleMarkComplete = () => {
        console.log('Marked as complete:', currentLesson?.id);
    };

    const pageTitle = currentLesson
        ? `${currentLesson.title} – CyberCode (Python)`
        : `CyberCode – Learn Python`;

    const pageDescription = currentLesson?.description ||
        `Interactive Python programming lessons. Master data structures, OOP, and automation.`;

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
                <div style={{ display: 'flex', flex: 1 }}>
                    <Sidebar
                        language="python"
                        lessons={pythonLessons}
                        currentLesson={currentLesson}
                        onSelectLesson={handleSelectLesson}
                        onBack={handleBack}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        completedExercises={completedExercises}
                        totalExercises={totalExercises}
                        isCompleted={isCompleted}
                    />
                    <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
                        <LessonView
                            key={currentLesson.id}
                            lesson={currentLesson}
                            language="python"
                            onNext={handleNext}
                            onPrev={handlePrev}
                            hasNext={currentIdx < pythonLessons.length - 1}
                            hasPrev={currentIdx > 0}
                            onMarkComplete={handleMarkComplete}
                            activeTab={activeTab}
                        />
                    </div>
                </div>

                <div style={{
                    width: '100%',
                    background: 'rgba(0, 5, 10, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderTop: '1px solid rgba(0, 245, 255, 0.4)',
                    fontFamily: 'var(--font-ui)',
                    textAlign: 'center',
                    padding: '28px 24px 24px',
                    marginTop: 'auto',
                    boxShadow: '0 -4px 20px rgba(0,0,0,0.5)',
                    zIndex: 10,
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