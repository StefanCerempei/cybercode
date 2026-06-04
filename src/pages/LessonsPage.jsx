import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../components/Sidebar.jsx';
import LessonView from '../components/LessonView.jsx';
import Footer from '../components/Footer.jsx';

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
        : `CyberCode – Învață ${language === 'python' ? 'Python' : 'C'}`;

    const pageDescription = currentLesson?.description ||
        `Lecții interactive de programare în ${language === 'python' ? 'Python' : 'C'}. Exerciții practice, editor de cod integrat.`;

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* Container principal – fără înălțime fixă, scroll natural */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                background: 'var(--bg-primary)',
            }}>
                {/* Zona cu două coloane – Sidebar sticky, conținut scrollabil */}
                <div style={{
                    display: 'flex',
                    flex: 1,
                }}>
                    {/* Sidebar – sticky pentru a rămâne vizibil la scroll */}
                    <div style={{
                        position: 'sticky',
                        top: 0,
                        height: '100vh',
                        overflowY: 'auto',
                        flexShrink: 0,
                    }}>
                        <Sidebar
                            language={language}
                            lessons={lessons}
                            currentLesson={currentLesson}
                            onSelectLesson={onSelectLesson}
                            onBack={onBack}
                        />
                    </div>

                    {/* Conținutul lecției – crește natural, generează scroll */}
                    <div style={{
                        flex: 1,
                        overflowY: 'auto',
                        paddingBottom: '2rem',
                    }}>
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

                {/* Footer – apare doar după ce ai terminat de derulat conținutul lecției */}
                <Footer />
            </div>
        </>
    );
}