import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/global.css';
import WelcomePage from './pages/WelcomePage.jsx';
import LessonsPage from './pages/LessonsPage.jsx';
import LearnC from './pages/LearnC.jsx';
import LearnPY from './pages/LearnPY.jsx';
import About from './pages/About.jsx';
import Docs from './pages/Docs.jsx';
import Community from './pages/Community.jsx';
import Support from './pages/Support.jsx';
import Blog from './pages/Blog.jsx';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/learn-c" element={<LearnC />} />
            <Route path="/learn-c/:lessonId" element={<LearnC />} />
            <Route path="/learn-py" element={<LearnPY />} />
            <Route path="/learn-py/:lessonId" element={<LearnPY />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
}