import { useState, useCallback } from 'react';
import cLessonsData from '../data/cLessons.js';
import pythonLessonsData from '../data/pythonLessons.js';

export function useLessons() {
  const [screen, setScreen] = useState('welcome');
  const [language, setLanguage] = useState(null);
  const [cLessons, setCLessons] = useState(cLessonsData);
  const [pyLessons, setPyLessons] = useState(pythonLessonsData);
  const [currentLessonId, setCurrentLessonId] = useState(null);

  const lessons = language === 'c' ? cLessons : pyLessons;
  const setLessons = language === 'c' ? setCLessons : setPyLessons;

  const currentLesson = lessons.find(l => l.id === currentLessonId) || lessons[0];
  const currentIdx = lessons.findIndex(l => l.id === currentLesson?.id);

  const handleSelectLanguage = useCallback((lang) => {
    setLanguage(lang);
    const ls = lang === 'c' ? cLessons : pyLessons;
    setCurrentLessonId(ls[0]?.id || null);
    setScreen('lessons');
  }, [cLessons, pyLessons]);

  const handleSelectLesson = useCallback((lesson) => {
    setCurrentLessonId(lesson.id);
  }, []);

  const handleBack = useCallback(() => {
    setScreen('welcome');
    setLanguage(null);
    setCurrentLessonId(null);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIdx < lessons.length - 1) {
      setCurrentLessonId(lessons[currentIdx + 1].id);
    }
  }, [currentIdx, lessons]);

  const handlePrev = useCallback(() => {
    if (currentIdx > 0) {
      setCurrentLessonId(lessons[currentIdx - 1].id);
    }
  }, [currentIdx, lessons]);

  const handleMarkComplete = useCallback(() => {
    setLessons(prev =>
      prev.map(l => l.id === currentLesson.id ? { ...l, completed: !l.completed } : l)
    );
  }, [currentLesson, setLessons]);

  return {
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
  };
}
