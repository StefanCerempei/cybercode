import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Doar Routes și Route, fără BrowserRouter
import './styles/global.css';
import WelcomePage from './pages/WelcomePage.jsx';
import LessonsPage from './pages/LessonsPage.jsx';
import LearnC from './pages/LearnC.jsx';
import LearnPY from './pages/LearnPY.jsx';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/learn-c" element={<LearnC />} />
            <Route path="/learn-c/:lessonId" element={<LearnC />} />
            <Route path="/learn-py" element={<LearnPY />} />
            <Route path="/learn-py/:lessonId" element={<LearnPY />} />
        </Routes>
    );
}