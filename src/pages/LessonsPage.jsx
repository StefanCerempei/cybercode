import React from 'react';
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
  return (
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
    </div>
  );
}
