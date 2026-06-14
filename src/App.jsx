import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';
import WelcomePage from './pages/WelcomePage.jsx';
import LearnC from './pages/LearnC.jsx';
import LearnPY from './pages/LearnPY.jsx';
import About from './pages/About.jsx';
import Docs from './pages/Docs.jsx';
import Community from './pages/Community.jsx';
import Support from './pages/Support.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Compiler from './pages/Compiler.jsx';
import Profile from './pages/Profile.jsx';
import { UserProgressProvider } from './context/UserProgressContext.jsx';

export default function App() {
    const location = useLocation();
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('cybercode_progress');
        return saved ? JSON.parse(saved) : { c: {}, python: {}, bookmarks: [] };
    });

    useEffect(() => {
        localStorage.setItem('cybercode_progress', JSON.stringify(progress));
    }, [progress]);

    const markLessonComplete = (language, lessonId) => {
        setProgress(prev => ({
            ...prev,
            [language]: {
                ...prev[language],
                [lessonId]: { completed: true, lastViewed: new Date().toISOString() }
            }
        }));
    };

    const markExerciseComplete = (language, lessonId, exerciseId, score) => {
        setProgress(prev => ({
            ...prev,
            [language]: {
                ...prev[language],
                [lessonId]: {
                    ...prev[language]?.[lessonId],
                    exercises: {
                        ...prev[language]?.[lessonId]?.exercises,
                        [exerciseId]: { completed: true, score, completedAt: new Date().toISOString() }
                    }
                }
            }
        }));
    };

    const toggleBookmark = (itemId, itemType, title) => {
        setProgress(prev => {
            const exists = prev.bookmarks.some(b => b.id === itemId);
            if (exists) {
                return { ...prev, bookmarks: prev.bookmarks.filter(b => b.id !== itemId) };
            } else {
                return { ...prev, bookmarks: [...prev.bookmarks, { id: itemId, type: itemType, title, addedAt: new Date().toISOString() }] };
            }
        });
    };

    const isBookmarked = (itemId) => {
        return progress.bookmarks.some(b => b.id === itemId);
    };

    return (
        <UserProgressProvider value={{ progress, markLessonComplete, markExerciseComplete, toggleBookmark, isBookmarked }}>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/learn-c" element={<LearnC />} />
                <Route path="/learn-c/:lessonId" element={<LearnC />} />
                <Route path="/learn-py" element={<LearnPY />} />
                <Route path="/learn-py/:lessonId" element={<LearnPY />} />
                <Route path="/about" element={<About />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/community" element={<Community />} />
                <Route path="/support" element={<Support />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/compiler" element={<Compiler />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </UserProgressProvider>
    );
}