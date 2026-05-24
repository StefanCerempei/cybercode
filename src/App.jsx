import React from 'react';
import './styles/global.css';
import { useLessons } from './hooks/useLessons.js';
import WelcomePage from './pages/WelcomePage.jsx';
import LessonsPage from './pages/LessonsPage.jsx';

export default function App() {
  const {
    screen,
    language,
    lessons,
    currentLesson,
    currentIdx,
    handleSelectLanguage,
    handleSelectLesson,
    handleBack,
    handleNext,
    handlePrev,
    handleMarkComplete,
  } = useLessons();

  if (screen === 'welcome') {
    return <WelcomePage onSelectLanguage={handleSelectLanguage} />;
  }

  return (
    <LessonsPage
      language={language}
      lessons={lessons}
      currentLesson={currentLesson}
      currentIdx={currentIdx}
      onSelectLesson={handleSelectLesson}
      onBack={handleBack}
      onNext={handleNext}
      onPrev={handlePrev}
      onMarkComplete={handleMarkComplete}
    />
  );
}
