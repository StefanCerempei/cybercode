import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../components/Sidebar.jsx';
import LessonView from '../components/LessonView.jsx';
import Footer from "../components/Footer";

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
    // Valori implicite în caz că nu există lecție curentă
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

            <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
                <Sidebar
                    language={language}
                    lessons={lessons}
                    currentLesson={currentLesson}
                    onSelectLesson={onSelectLesson}
                    onBack={onBack}
                />
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
                <Footer></Footer>
            </div>
        </>
    );
}