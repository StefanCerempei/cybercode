import React, { useState, useEffect } from 'react';
import LessonContent from '../components/LessonContent.jsx';
import CodeEditor from '../components/CodeEditor.jsx';
import { ACCENT } from '../utils/constants.js';
import { useUserProgress } from '../context/UserProgressContext.jsx';
import axios from 'axios';

export default function LessonView({
                                       lesson,
                                       language,
                                       onNext,
                                       onPrev,
                                       hasNext,
                                       hasPrev,
                                       activeTab = 'lesson'
                                   }) {
    const [notes, setNotes] = useState('');
    const [exerciseAnswers, setExerciseAnswers] = useState({});
    const [exerciseResults, setExerciseResults] = useState({});
    const [codingCode, setCodingCode] = useState('');
    const [codingOutput, setCodingOutput] = useState('');
    const [codingError, setCodingError] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { progress, markLessonComplete, markExerciseComplete } = useUserProgress();
    const accent = ACCENT[language];
    const isCompleted = progress[language]?.[lesson.id]?.completed || false;

    // Load saved notes from localStorage
    useEffect(() => {
        const savedNotes = localStorage.getItem(`notes_${language}_${lesson.id}`);
        if (savedNotes) setNotes(savedNotes);
    }, [language, lesson.id]);

    const saveNotes = (value) => {
        setNotes(value);
        localStorage.setItem(`notes_${language}_${lesson.id}`, value);
    };

    const handleMarkComplete = () => {
        if (!isCompleted) {
            markLessonComplete(language, lesson.id);
        }
    };

    const checkExercise = (exerciseId, userAnswer) => {
        const exercise = lesson.exercises?.find(e => e.id === exerciseId);
        if (!exercise) return;

        const normalize = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ');
        const isCorrect = normalize(userAnswer) === normalize(exercise.solution);

        setExerciseResults(prev => ({ ...prev, [exerciseId]: isCorrect }));

        if (isCorrect) {
            markExerciseComplete(language, lesson.id, exerciseId, 100);
        }
    };

    const runCodingCode = async () => {
        setIsRunning(true);
        setCodingOutput('');
        setCodingError('');

        try {
            const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
                language: language === 'c' ? 'c' : 'python',
                version: language === 'c' ? '10.2.0' : '3.10.0',
                files: [{ content: codingCode }],
                stdin: ''
            });

            if (response.data.run.stderr) {
                setCodingError(response.data.run.stderr);
            }
            if (response.data.run.output) {
                setCodingOutput(response.data.run.output);
            }
            if (response.data.run.code !== 0 && !response.data.run.stderr) {
                setCodingError(`Process exited with code ${response.data.run.code}`);
            }
        } catch (err) {
            console.error('Execution error:', err);
            setCodingError(`Execution failed: ${err.message}. Please try again.`);
        } finally {
            setIsRunning(false);
        }
    };

    const getSampleCode = () => {
        if (language === 'c') {
            return `#include <stdio.h>

int main() {
    printf("Welcome to CyberCode!\\n");
    printf("Practice coding in C right here!\\n");
    
    int a = 10, b = 20;
    printf("%d + %d = %d\\n", a, b, a + b);
    
    return 0;
}`;
        } else {
            return `# Welcome to CyberCode Python Playground!
print("Welcome to CyberCode!")
print("Practice coding in Python right here!")

a = 10
b = 20
print(f"{a} + {b} = {a + b}")

# Try a loop!
for i in range(5):
    print(f"Count: {i}")`;
        }
    };

    useEffect(() => {
        if (activeTab === 'coding' && !codingCode) {
            setCodingCode(getSampleCode());
        }
    }, [activeTab, language]);

    const totalExercises = lesson.exercises?.length || 0;
    const completedExercises = lesson.exercises?.filter(ex =>
        progress[language]?.[lesson.id]?.exercises?.[ex.id]?.completed
    ).length || 0;

    // Stiluri comune
    const cardStyle = {
        background: 'rgba(0, 20, 30, 0.6)',
        border: '1px solid rgba(0, 245, 255, 0.15)',
        borderRadius: '12px',
        padding: isMobile ? '16px' : '24px',
        marginBottom: '16px',
    };

    const headingStyle = {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: isMobile ? '20px' : '28px',
        color: 'var(--text-primary)',
        marginBottom: '8px',
    };

    const subHeadingStyle = {
        fontFamily: 'var(--font-ui)',
        fontSize: isMobile ? '13px' : '15px',
        color: 'var(--text-secondary)',
        marginBottom: '16px',
    };

    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden',
            background: 'var(--bg-primary)',
        }}>
            {/* Top bar - doar cu MARK COMPLETE */}
            <div style={{
                borderBottom: '1px solid var(--border)',
                padding: isMobile ? '8px 16px' : '12px 32px',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: isMobile ? 48 : 56,
                flexShrink: 0,
                gap: '8px',
                flexWrap: 'wrap',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexWrap: 'wrap',
                }}>
                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: isMobile ? '9px' : '11px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.05em',
                    }}>
                        {language === 'c' ? 'C' : 'Python'} / {lesson.id?.split('-')[1] || '01'}
                    </span>
                    {totalExercises > 0 && (
                        <span style={{
                            fontSize: isMobile ? '8px' : '10px',
                            color: completedExercises === totalExercises ? accent : 'var(--text-muted)',
                            background: 'rgba(0,245,255,0.08)',
                            padding: '2px 10px',
                            borderRadius: '12px',
                            border: `1px solid ${completedExercises === totalExercises ? accent : 'rgba(0,245,255,0.1)'}`,
                        }}>
                            {completedExercises}/{totalExercises} ex
                        </span>
                    )}
                </div>

                <button
                    onClick={handleMarkComplete}
                    style={{
                        background: isCompleted ? accent : 'transparent',
                        border: `1px solid ${isCompleted ? accent : 'var(--border)'}`,
                        borderRadius: '4px',
                        padding: isMobile ? '4px 12px' : '7px 18px',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-mono)',
                        fontSize: isMobile ? '9px' : '11px',
                        letterSpacing: '0.05em',
                        color: isCompleted ? 'var(--bg-primary)' : 'var(--text-muted)',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {isCompleted ? '✓ COMPLETED' : isMobile ? '✓ Done' : 'MARK COMPLETE'}
                </button>
            </div>

            {/* Content - afișează doar tab-ul activ */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: isMobile ? '12px 14px 20px' : '24px 40px 40px',
            }}>
                {activeTab === 'lesson' && (
                    <>
                        <div style={{ marginBottom: isMobile ? '16px' : '32px' }}>
                            <h1 style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 800,
                                fontSize: isMobile ? '22px' : '32px',
                                color: 'var(--text-primary)',
                                lineHeight: 1.2,
                                marginBottom: '8px',
                            }}>
                                {lesson.title}
                            </h1>
                            {lesson.description && (
                                <p style={{
                                    fontFamily: 'var(--font-ui)',
                                    fontSize: isMobile ? '13px' : '15px',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.5,
                                }}>
                                    {lesson.description}
                                </p>
                            )}
                        </div>
                        <LessonContent lesson={lesson} language={language} />

                        {lesson.keyTakeaways && (
                            <div style={{
                                marginTop: '24px',
                                padding: isMobile ? '16px' : '20px',
                                background: `linear-gradient(135deg, ${accent}10, transparent)`,
                                borderLeft: `3px solid ${accent}`,
                                borderRadius: '8px',
                            }}>
                                <h3 style={{ color: accent, marginBottom: '8px', fontSize: isMobile ? '14px' : '16px' }}>
                                    🎯 Key Takeaways
                                </h3>
                                <ul style={{
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.8',
                                    paddingLeft: '20px',
                                    fontSize: isMobile ? '13px' : '14px',
                                    margin: 0,
                                }}>
                                    {lesson.keyTakeaways.map((takeaway, i) => (
                                        <li key={i}>{takeaway}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                )}

                {activeTab === 'exercises' && (
                    <div>
                        <h2 style={headingStyle}>Practice Exercises</h2>
                        <p style={subHeadingStyle}>
                            {totalExercises > 0
                                ? `You've completed ${completedExercises} of ${totalExercises}.`
                                : 'Exercises coming soon!'}
                        </p>

                        {lesson.exercises?.map((exercise, idx) => {
                            const isCompleted = progress[language]?.[lesson.id]?.exercises?.[exercise.id]?.completed;
                            const difficultyColors = {
                                beginner: '#00ff88',
                                intermediate: '#ffd700',
                                advanced: '#ff6b00',
                            };
                            const diffColor = difficultyColors[exercise.difficulty] || '#00f5ff';

                            return (
                                <div key={exercise.id} style={{
                                    ...cardStyle,
                                    borderColor: isCompleted ? accent : 'rgba(0, 245, 255, 0.15)',
                                    padding: isMobile ? '14px' : '24px',
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: '12px',
                                        flexWrap: 'wrap',
                                        gap: '8px',
                                    }}>
                                        <div>
                                            <h3 style={{
                                                color: isCompleted ? accent : 'var(--accent-cyan)',
                                                fontSize: isMobile ? '15px' : '17px',
                                                marginBottom: '4px',
                                            }}>
                                                {idx + 1}. {exercise.title}
                                            </h3>
                                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                                {exercise.difficulty && (
                                                    <span style={{
                                                        fontSize: '9px',
                                                        padding: '2px 8px',
                                                        borderRadius: '12px',
                                                        background: `${diffColor}20`,
                                                        color: diffColor,
                                                        border: `1px solid ${diffColor}30`,
                                                    }}>
                                                        {exercise.difficulty.toUpperCase()}
                                                    </span>
                                                )}
                                                {exercise.points && (
                                                    <span style={{
                                                        fontSize: '9px',
                                                        padding: '2px 8px',
                                                        borderRadius: '12px',
                                                        background: 'rgba(0,245,255,0.1)',
                                                        color: 'var(--accent-cyan)',
                                                    }}>
                                                        🎯 {exercise.points} pts
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {isCompleted && (
                                            <span style={{ color: accent, fontSize: '20px' }}>✓</span>
                                        )}
                                    </div>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: isMobile ? '13px' : '14px',
                                        lineHeight: '1.6',
                                        marginBottom: '12px',
                                    }}>
                                        {exercise.instructions}
                                    </p>

                                    {exercise.hints && exercise.hints.length > 0 && (
                                        <details style={{ marginBottom: '12px' }}>
                                            <summary style={{
                                                color: 'var(--accent-cyan)',
                                                cursor: 'pointer',
                                                fontSize: isMobile ? '12px' : '13px',
                                            }}>
                                                💡 Hint
                                            </summary>
                                            <ul style={{
                                                marginTop: '8px',
                                                paddingLeft: '20px',
                                                color: 'var(--text-muted)',
                                                fontSize: isMobile ? '12px' : '13px',
                                            }}>
                                                {exercise.hints.map((hint, i) => (
                                                    <li key={i}>{hint}</li>
                                                ))}
                                            </ul>
                                        </details>
                                    )}

                                    <textarea
                                        placeholder="Write your solution here..."
                                        value={exerciseAnswers[exercise.id] || ''}
                                        onChange={(e) => {
                                            setExerciseAnswers(prev => ({ ...prev, [exercise.id]: e.target.value }));
                                            setExerciseResults(prev => ({ ...prev, [exercise.id]: undefined }));
                                        }}
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            background: 'rgba(0,0,0,0.5)',
                                            border: `1px solid ${
                                                exerciseResults[exercise.id] === true
                                                    ? '#00ff88'
                                                    : exerciseResults[exercise.id] === false
                                                        ? '#ff2d55'
                                                        : 'rgba(0,245,255,0.3)'
                                            }`,
                                            borderRadius: '8px',
                                            color: 'var(--text-primary)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: isMobile ? '12px' : '13px',
                                            marginBottom: '10px',
                                            minHeight: isMobile ? '80px' : '100px',
                                            resize: 'vertical',
                                        }}
                                    />

                                    <div style={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <button
                                            onClick={() => checkExercise(exercise.id, exerciseAnswers[exercise.id] || '')}
                                            disabled={isCompleted}
                                            style={{
                                                background: isCompleted
                                                    ? accent
                                                    : `linear-gradient(90deg, ${accent}, #00aacc)`,
                                                border: 'none',
                                                color: isCompleted ? '#000' : '#fff',
                                                padding: isMobile ? '6px 16px' : '8px 20px',
                                                borderRadius: '20px',
                                                cursor: isCompleted ? 'default' : 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: isMobile ? '11px' : '12px',
                                            }}
                                        >
                                            {isCompleted ? '✓ Done' : 'Check'}
                                        </button>

                                        {exerciseResults[exercise.id] !== undefined && !isCompleted && (
                                            <span style={{
                                                color: exerciseResults[exercise.id] ? '#00ff88' : '#ff2d55',
                                                fontSize: isMobile ? '12px' : '13px',
                                            }}>
                                                {exerciseResults[exercise.id] ? '✓ Correct!' : '✗ Try again'}
                                            </span>
                                        )}
                                    </div>

                                    {isCompleted && (
                                        <div style={{
                                            marginTop: '12px',
                                            padding: '12px',
                                            background: 'rgba(0,255,136,0.08)',
                                            borderRadius: '8px',
                                        }}>
                                            <strong style={{ color: accent, fontSize: isMobile ? '12px' : '13px' }}>
                                                📖 Solution:
                                            </strong>
                                            <pre style={{
                                                marginTop: '6px',
                                                color: 'var(--text-secondary)',
                                                fontSize: isMobile ? '11px' : '12px',
                                                overflow: 'auto',
                                                fontFamily: 'var(--font-mono)',
                                            }}>
                                                {exercise.solution}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {activeTab === 'coding' && (
                    <div>
                        <h2 style={headingStyle}>Code Playground</h2>
                        <p style={subHeadingStyle}>
                            Write and run {language === 'c' ? 'C' : 'Python'} code.
                        </p>

                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? '12px' : '20px',
                            marginBottom: '16px',
                        }}>
                            {/* Code Editor */}
                            <div style={{
                                flex: '1',
                                background: 'rgba(0, 20, 30, 0.6)',
                                border: '1px solid rgba(0, 245, 255, 0.15)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                            }}>
                                <div style={{
                                    padding: isMobile ? '8px 12px' : '12px 16px',
                                    background: 'rgba(0,0,0,0.3)',
                                    borderBottom: '1px solid rgba(0,245,255,0.15)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '8px',
                                    flexWrap: 'wrap',
                                }}>
                                    <span style={{
                                        color: accent,
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: isMobile ? '10px' : '12px',
                                    }}>
                                        📝 {language === 'c' ? 'main.c' : 'main.py'}
                                    </span>
                                    <div style={{ display: 'flex', gap: '6px' }}>
                                        <button
                                            onClick={() => setCodingCode(getSampleCode())}
                                            style={{
                                                background: 'rgba(0,245,255,0.1)',
                                                border: '1px solid var(--accent-cyan)',
                                                color: 'var(--accent-cyan)',
                                                padding: isMobile ? '3px 8px' : '4px 12px',
                                                borderRadius: '16px',
                                                cursor: 'pointer',
                                                fontSize: isMobile ? '9px' : '11px',
                                            }}
                                        >
                                            Reset
                                        </button>
                                        <button
                                            onClick={runCodingCode}
                                            disabled={isRunning}
                                            style={{
                                                background: isRunning
                                                    ? '#555'
                                                    : `linear-gradient(90deg, ${accent}, #00aacc)`,
                                                border: 'none',
                                                color: '#000',
                                                padding: isMobile ? '3px 12px' : '4px 16px',
                                                borderRadius: '16px',
                                                cursor: isRunning ? 'not-allowed' : 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: isMobile ? '9px' : '11px',
                                            }}
                                        >
                                            {isRunning ? '...' : '▶ Run'}
                                        </button>
                                    </div>
                                </div>
                                <div style={{ padding: isMobile ? '8px' : '16px' }}>
                                    <CodeEditor
                                        code={codingCode}
                                        language={language}
                                        editable={true}
                                        onChange={setCodingCode}
                                    />
                                </div>
                            </div>

                            {/* Output */}
                            <div style={{
                                flex: '1',
                                background: 'rgba(0, 20, 30, 0.6)',
                                border: '1px solid rgba(0, 245, 255, 0.15)',
                                borderRadius: '12px',
                            }}>
                                <div style={{
                                    padding: isMobile ? '8px 12px' : '12px 16px',
                                    background: 'rgba(0,0,0,0.3)',
                                    borderBottom: '1px solid rgba(0,245,255,0.15)',
                                }}>
                                    <span style={{
                                        color: accent,
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: isMobile ? '10px' : '12px',
                                    }}>
                                        💻 Output
                                    </span>
                                </div>
                                <div style={{ padding: isMobile ? '10px' : '16px' }}>
                                    <pre style={{
                                        background: 'rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(0,245,255,0.2)',
                                        borderRadius: '8px',
                                        padding: isMobile ? '10px' : '16px',
                                        color: codingOutput ? '#00ff88' : 'var(--text-muted)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: isMobile ? '11px' : '12px',
                                        overflow: 'auto',
                                        minHeight: isMobile ? '80px' : '120px',
                                        maxHeight: isMobile ? '150px' : '300px',
                                        whiteSpace: 'pre-wrap',
                                        wordBreak: 'break-word',
                                        margin: 0,
                                    }}>
                                        {codingOutput || 'Run your code to see output...'}
                                    </pre>
                                    {codingError && (
                                        <pre style={{
                                            marginTop: '10px',
                                            background: 'rgba(255,45,85,0.1)',
                                            border: '1px solid #ff2d55',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            color: '#ff6b8a',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: isMobile ? '11px' : '12px',
                                            overflow: 'auto',
                                            maxHeight: '100px',
                                        }}>
                                            ⚠️ {codingError}
                                        </pre>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'notes' && (
                    <div>
                        <h2 style={headingStyle}>Your Notes</h2>
                        <p style={subHeadingStyle}>Notes are saved automatically.</p>
                        <textarea
                            placeholder="Take notes on this lesson..."
                            value={notes}
                            onChange={(e) => saveNotes(e.target.value)}
                            style={{
                                width: '100%',
                                minHeight: isMobile ? '250px' : '350px',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                padding: isMobile ? '14px' : '20px',
                                fontFamily: 'var(--font-ui)',
                                fontSize: isMobile ? '13px' : '14px',
                                lineHeight: '1.7',
                                color: 'var(--text-primary)',
                                resize: 'vertical',
                                outline: 'none',
                                caretColor: accent,
                            }}
                            onFocus={e => (e.target.style.borderColor = accent)}
                            onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                        />
                    </div>
                )}
            </div>

            {/* Bottom nav */}
            <div style={{
                borderTop: '1px solid var(--border)',
                padding: isMobile ? '8px 12px' : '12px 32px',
                background: 'var(--bg-secondary)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexShrink: 0,
                gap: '8px',
            }}>
                <button
                    onClick={onPrev}
                    disabled={!hasPrev}
                    style={{
                        background: 'transparent',
                        border: `1px solid ${hasPrev ? 'var(--border)' : 'rgba(255,255,255,0.05)'}`,
                        borderRadius: '4px',
                        padding: isMobile ? '6px 12px' : '9px 20px',
                        cursor: hasPrev ? 'pointer' : 'not-allowed',
                        fontFamily: 'var(--font-mono)',
                        fontSize: isMobile ? '9px' : '11px',
                        letterSpacing: '0.05em',
                        color: hasPrev ? 'var(--text-secondary)' : 'var(--text-muted)',
                        opacity: hasPrev ? 1 : 0.4,
                        transition: 'all 0.2s',
                    }}
                >
                    ← {isMobile ? '' : 'PREV'}
                </button>

                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? '8px' : '11px',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    padding: '0 4px',
                }}>
                    <span style={{ color: accent }}>
                        {isMobile ? lesson.title?.substring(0, 15) : lesson.title?.substring(0, 25)}
                        {lesson.title?.length > (isMobile ? 15 : 25) ? '…' : ''}
                    </span>
                </div>

                <button
                    onClick={onNext}
                    disabled={!hasNext}
                    style={{
                        background: hasNext ? accent : 'transparent',
                        border: `1px solid ${hasNext ? accent : 'rgba(255,255,255,0.05)'}`,
                        borderRadius: '4px',
                        padding: isMobile ? '6px 12px' : '9px 20px',
                        cursor: hasNext ? 'pointer' : 'not-allowed',
                        fontFamily: 'var(--font-mono)',
                        fontSize: isMobile ? '9px' : '11px',
                        letterSpacing: '0.05em',
                        color: hasNext ? 'var(--bg-primary)' : 'var(--text-muted)',
                        fontWeight: 700,
                        opacity: hasNext ? 1 : 0.4,
                        transition: 'all 0.2s',
                    }}
                >
                    {isMobile ? '' : 'NEXT'} →
                </button>
            </div>
        </div>
    );
}