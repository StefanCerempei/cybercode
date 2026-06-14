import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useUserProgress } from '../context/UserProgressContext.jsx';
import cLessons from '../data/cLessons.js';
import pythonLessons from '../data/pythonLessons.js';

export default function Profile() {
    const navigate = useNavigate();
    const { progress } = useUserProgress();

    const calculateStats = () => {
        const cCompleted = Object.values(progress.c || {}).filter(l => l.completed).length;
        const pythonCompleted = Object.values(progress.python || {}).filter(l => l.completed).length;
        const totalLessons = cLessons.length + pythonLessons.length;
        const totalCompleted = cCompleted + pythonCompleted;
        const completionRate = totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0;

        let totalExercisesCompleted = 0;
        Object.values(progress.c || {}).forEach(lesson => {
            if (lesson.exercises) {
                totalExercisesCompleted += Object.values(lesson.exercises).filter(e => e.completed).length;
            }
        });
        Object.values(progress.python || {}).forEach(lesson => {
            if (lesson.exercises) {
                totalExercisesCompleted += Object.values(lesson.exercises).filter(e => e.completed).length;
            }
        });

        return { cCompleted, pythonCompleted, totalCompleted, completionRate, totalExercisesCompleted };
    };

    const stats = calculateStats();

    return (
        <>
            <Helmet>
                <title>My Profile - Learning Progress | CyberCode</title>
            </Helmet>

            <div style={{
                background: 'var(--bg-primary)',
                minHeight: '100vh',
                padding: '60px 20px'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            background: 'rgba(0,245,255,0.1)',
                            border: '1px solid var(--accent-cyan)',
                            color: 'var(--accent-cyan)',
                            padding: '8px 20px',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            marginBottom: '32px'
                        }}
                    >
                        ← BACK TO HOME
                    </button>

                    <h1 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        color: 'var(--accent-cyan)',
                        marginBottom: '16px'
                    }}>
                        My Learning Profile
                    </h1>

                    {/* Stats Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '32px'
                    }}>
                        <div style={statCardStyle}>
                            <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--accent-cyan)' }}>{stats.totalCompleted}</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Lessons Completed</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>out of {cLessons.length + pythonLessons.length}</div>
                        </div>
                        <div style={statCardStyle}>
                            <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--accent-green)' }}>{stats.totalExercisesCompleted}</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Exercises Solved</div>
                        </div>
                        <div style={statCardStyle}>
                            <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--accent-orange)' }}>{Math.round(stats.completionRate)}%</div>
                            <div style={{ color: 'var(--text-secondary)' }}>Completion Rate</div>
                        </div>
                    </div>

                    {/* Language Progress */}
                    <div style={{
                        background: 'rgba(0, 20, 30, 0.6)',
                        border: '1px solid rgba(0, 245, 255, 0.2)',
                        borderRadius: '16px',
                        padding: '24px',
                        marginBottom: '24px'
                    }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '20px' }}>📊 Progress by Language</h2>

                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ color: 'var(--accent-orange)' }}>C Programming</span>
                                <span>{stats.cCompleted}/{cLessons.length} lessons</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: `${(stats.cCompleted / cLessons.length) * 100}%`, height: '100%', background: 'var(--accent-orange)', borderRadius: '4px' }} />
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ color: 'var(--accent-green)' }}>Python Programming</span>
                                <span>{stats.pythonCompleted}/{pythonLessons.length} lessons</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: `${(stats.pythonCompleted / pythonLessons.length) * 100}%`, height: '100%', background: 'var(--accent-green)', borderRadius: '4px' }} />
                            </div>
                        </div>
                    </div>

                    {/* Continue Learning */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(0,170,204,0.05))',
                        border: '1px solid rgba(0, 245, 255, 0.3)',
                        borderRadius: '16px',
                        padding: '24px',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '12px' }}>Continue Your Journey</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            Keep learning and unlock new achievements!
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                            <button
                                onClick={() => navigate('/learn-c')}
                                style={{
                                    background: 'linear-gradient(90deg, var(--accent-orange), #ff5500)',
                                    border: 'none',
                                    color: '#000',
                                    padding: '10px 24px',
                                    borderRadius: '30px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                Continue C Course
                            </button>
                            <button
                                onClick={() => navigate('/learn-py')}
                                style={{
                                    background: 'linear-gradient(90deg, var(--accent-green), #00cc88)',
                                    border: 'none',
                                    color: '#000',
                                    padding: '10px 24px',
                                    borderRadius: '30px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                Continue Python Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const statCardStyle = {
    background: 'rgba(0, 20, 30, 0.6)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center'
};