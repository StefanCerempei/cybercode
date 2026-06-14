import React, { useState, useEffect } from 'react';
import LessonContent from './LessonContent.jsx';
import CodeEditor from './CodeEditor.jsx';
import { ACCENT } from '../utils/constants.js';
import { useUserProgress } from '../context/UserProgressContext.jsx';
import axios from 'axios';

const TABS = [
    { id: 'lesson', label: '📖 LESSON' },
    { id: 'exercises', label: '✏️ EXERCISES' },
    { id: 'coding', label: '💻 CODE PLAYGROUND' },
    { id: 'notes', label: '📝 NOTES' },
];

const API_URL = 'http://localhost:3001/api';

export default function LessonView({ lesson, language, onNext, onPrev, hasNext, hasPrev }) {
    const [tab, setTab] = useState('lesson');
    const [notes, setNotes] = useState('');
    const [exerciseAnswers, setExerciseAnswers] = useState({});
    const [exerciseResults, setExerciseResults] = useState({});
    const [codingCode, setCodingCode] = useState('');
    const [codingOutput, setCodingOutput] = useState('');
    const [codingError, setCodingError] = useState('');
    const [isRunning, setIsRunning] = useState(false);

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

        // Simple answer checking (can be enhanced)
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
            const response = await axios.post(`${API_URL}/execute`, {
                language,
                code: codingCode,
                stdin: ''
            });

            if (response.data.error) {
                setCodingError(response.data.error);
            }
            if (response.data.output) {
                setCodingOutput(response.data.output);
            }
            if (response.data.code !== 0 && !response.data.error) {
                setCodingError(`Process exited with code ${response.data.code}`);
            }
        } catch (err) {
            setCodingError(err.response?.data?.error || 'Failed to execute code. Make sure the backend server is running on port 3001.');
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
    
    // Try modifying this code
    int a = 10, b = 20;
    printf("%d + %d = %d\\n", a, b, a + b);
    
    return 0;
}`;
        } else {
            return `# Welcome to CyberCode Python Playground!
print("Welcome to CyberCode!")
print("Practice coding in Python right here!")

# Try modifying this code
a = 10
b = 20
print(f"{a} + {b} = {a + b}")

# Try a loop!
for i in range(5):
    print(f"Count: {i}")`;
        }
    };

    useEffect(() => {
        if (tab === 'coding' && !codingCode) {
            setCodingCode(getSampleCode());
        }
    }, [tab, language]);

    const totalExercises = lesson.exercises?.length || 0;
    const completedExercises = lesson.exercises?.filter(ex =>
        progress[language]?.[lesson.id]?.exercises?.[ex.id]?.completed
    ).length || 0;

    return (
        <div style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            height: '100vh', overflow: 'hidden',
            background: 'var(--bg-primary)',
        }}>
            {/* Top bar */}
            <div style={{
                borderBottom: '1px solid var(--border)',
                padding: '0 32px',
                background: 'var(--bg-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                minHeight: 64, flexShrink: 0,
                flexWrap: 'wrap',
                gap: '10px',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                    {TABS.map(t => (
                        <button
                            key={t.id}
                            onClick={() => setTab(t.id)}
                            style={{
                                background: 'transparent', border: 'none',
                                borderBottom: tab === t.id ? `2px solid ${accent}` : '2px solid transparent',
                                padding: '20px 0', cursor: 'pointer',
                                fontFamily: 'var(--font-mono)', fontSize: 11,
                                letterSpacing: '0.15em', textTransform: 'uppercase',
                                color: tab === t.id ? accent : 'var(--text-muted)',
                                transition: 'all 0.2s',
                            }}
                        >
                            {t.label}
                        </button>
                    ))}
                    {totalExercises > 0 && tab !== 'exercises' && (
                        <span style={{
                            fontSize: '10px',
                            color: completedExercises === totalExercises ? accent : 'var(--text-muted)',
                            background: 'rgba(0,245,255,0.1)',
                            padding: '2px 8px',
                            borderRadius: '20px',
                        }}>
                            {completedExercises}/{totalExercises} exercises done
                        </span>
                    )}
                </div>

                <button
                    onClick={handleMarkComplete}
                    style={{
                        background: isCompleted ? accent : 'transparent',
                        border: `1px solid ${isCompleted ? accent : 'var(--border)'}`,
                        borderRadius: 2, padding: '7px 18px', cursor: 'pointer',
                        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
                        color: isCompleted ? 'var(--bg-primary)' : 'var(--text-muted)',
                        transition: 'all 0.2s',
                    }}
                >
                    {isCompleted ? '✓ COMPLETED' : 'MARK COMPLETE'}
                </button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '36px 40px 40px' }}>
                {tab === 'lesson' && (
                    <>
                        <div style={{ marginBottom: 32, animation: 'fadeIn 0.4s ease' }}>
                            <div style={{
                                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.25em',
                                color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8,
                            }}>
                                <span style={{ color: accent }}>▸</span>{' '}
                                {language === 'c' ? 'C PROGRAMMING' : 'PYTHON'} / LESSON {lesson.id.split('-')[1]}
                            </div>
                            <h1 style={{
                                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32,
                                color: 'var(--text-primary)', lineHeight: 1.2,
                                letterSpacing: '-0.01em', marginBottom: 12,
                            }}>
                                {lesson.title}
                            </h1>
                            {lesson.description && (
                                <p style={{
                                    fontFamily: 'var(--font-ui)', fontSize: 15,
                                    color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 600,
                                }}>
                                    {lesson.description}
                                </p>
                            )}
                            <div style={{
                                marginTop: 16, height: 1, maxWidth: 400,
                                background: `linear-gradient(90deg, ${accent}, transparent)`,
                                opacity: 0.3,
                            }} />
                        </div>
                        <LessonContent lesson={lesson} language={language} />

                        {/* Key Takeaways */}
                        {lesson.keyTakeaways && (
                            <div style={{
                                marginTop: '40px',
                                padding: '20px',
                                background: `linear-gradient(135deg, ${accent}10, transparent)`,
                                borderLeft: `3px solid ${accent}`,
                                borderRadius: '8px',
                            }}>
                                <h3 style={{ color: accent, marginBottom: '12px' }}>🎯 Key Takeaways</h3>
                                <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                    {lesson.keyTakeaways.map((takeaway, i) => (
                                        <li key={i}>{takeaway}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                )}

                {tab === 'exercises' && (
                    <div style={{ animation: 'fadeIn 0.3s ease' }}>
                        <div style={{ marginBottom: '24px' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24,
                                color: 'var(--text-primary)', marginBottom: 8,
                            }}>
                                Practice Exercises
                            </h2>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Complete these exercises to test your understanding.
                                {totalExercises > 0 && ` You've completed ${completedExercises} of ${totalExercises}.`}
                            </p>
                            {totalExercises === 0 && (
                                <p style={{ color: 'var(--accent-cyan)', marginTop: '12px' }}>
                                    More exercises coming soon for this lesson!
                                </p>
                            )}
                        </div>

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
                                    background: 'rgba(0, 20, 30, 0.6)',
                                    border: `1px solid ${isCompleted ? accent : 'rgba(0, 245, 255, 0.2)'}`,
                                    borderRadius: '12px',
                                    padding: '24px',
                                    marginBottom: '24px',
                                    transition: 'all 0.3s',
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                                        <div>
                                            <h3 style={{ color: isCompleted ? accent : 'var(--accent-cyan)', marginBottom: '4px' }}>
                                                Exercise {idx + 1}: {exercise.title}
                                            </h3>
                                            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                                                {exercise.difficulty && (
                                                    <span style={{
                                                        fontSize: '10px',
                                                        padding: '2px 8px',
                                                        borderRadius: '20px',
                                                        background: `${diffColor}20`,
                                                        color: diffColor,
                                                        border: `1px solid ${diffColor}40`,
                                                    }}>
                                                        {exercise.difficulty.toUpperCase()}
                                                    </span>
                                                )}
                                                {exercise.points && (
                                                    <span style={{
                                                        fontSize: '10px',
                                                        padding: '2px 8px',
                                                        borderRadius: '20px',
                                                        background: 'rgba(0,245,255,0.1)',
                                                        color: 'var(--accent-cyan)',
                                                    }}>
                                                        🎯 {exercise.points} points
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {isCompleted && (
                                            <span style={{ color: accent, fontSize: '20px' }}>✓</span>
                                        )}
                                    </div>

                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.7' }}>
                                        {exercise.instructions}
                                    </p>

                                    {exercise.example && (
                                        <div style={{
                                            background: '#060c18',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            marginBottom: '16px',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '12px',
                                        }}>
                                            <div style={{ color: accent, marginBottom: '8px' }}>📘 Example:</div>
                                            <pre style={{ color: 'var(--text-secondary)', margin: 0 }}>{exercise.example}</pre>
                                        </div>
                                    )}

                                    {exercise.hints && exercise.hints.length > 0 && (
                                        <details style={{ marginBottom: '16px' }}>
                                            <summary style={{ color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '13px' }}>
                                                💡 Show Hints ({exercise.hints.length})
                                            </summary>
                                            <ul style={{ marginTop: '12px', paddingLeft: '20px', color: 'var(--text-muted)' }}>
                                                {exercise.hints.map((hint, i) => (
                                                    <li key={i} style={{ marginBottom: '8px' }}>{hint}</li>
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
                                            padding: '12px',
                                            background: 'rgba(0,0,0,0.5)',
                                            border: `1px solid ${exerciseResults[exercise.id] === true ? '#00ff88' : exerciseResults[exercise.id] === false ? '#ff2d55' : 'rgba(0,245,255,0.3)'}`,
                                            borderRadius: '8px',
                                            color: 'var(--text-primary)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '13px',
                                            marginBottom: '12px',
                                            minHeight: '120px',
                                            resize: 'vertical',
                                        }}
                                    />

                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                                        <button
                                            onClick={() => checkExercise(exercise.id, exerciseAnswers[exercise.id] || '')}
                                            disabled={isCompleted}
                                            style={{
                                                background: isCompleted ? accent : 'linear-gradient(90deg, var(--accent-cyan), #00aacc)',
                                                border: 'none',
                                                color: isCompleted ? '#000' : '#fff',
                                                padding: '8px 20px',
                                                borderRadius: '30px',
                                                cursor: isCompleted ? 'default' : 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: '12px',
                                            }}
                                        >
                                            {isCompleted ? 'Completed!' : 'Check Solution'}
                                        </button>

                                        {exerciseResults[exercise.id] !== undefined && !isCompleted && (
                                            <span style={{ color: exerciseResults[exercise.id] ? '#00ff88' : '#ff2d55', fontSize: '13px' }}>
                                                {exerciseResults[exercise.id] ? '✓ Correct! Great job!' : '✗ Not quite right. Try again!'}
                                            </span>
                                        )}
                                    </div>

                                    {isCompleted && (
                                        <div style={{ marginTop: '16px', padding: '16px', background: 'rgba(0,255,136,0.1)', borderRadius: '8px' }}>
                                            <strong style={{ color: accent }}>📖 Sample Solution:</strong>
                                            <pre style={{ marginTop: '12px', color: 'var(--text-secondary)', fontSize: '12px', overflow: 'auto' }}>
                                                {exercise.solution}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Exercise completion celebration */}
                        {totalExercises > 0 && completedExercises === totalExercises && !isCompleted && (
                            <div style={{
                                textAlign: 'center',
                                padding: '30px',
                                background: `linear-gradient(135deg, ${accent}20, transparent)`,
                                borderRadius: '16px',
                                marginTop: '20px',
                            }}>
                                <span style={{ fontSize: '48px' }}>🎉</span>
                                <h3 style={{ color: accent, marginTop: '12px' }}>All exercises completed!</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Don't forget to mark this lesson as complete above.</p>
                            </div>
                        )}
                    </div>
                )}

                {tab === 'coding' && (
                    <div style={{ animation: 'fadeIn 0.3s ease' }}>
                        <div style={{ marginBottom: '24px' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24,
                                color: 'var(--text-primary)', marginBottom: 8,
                            }}>
                                Code Playground
                            </h2>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Write, run, and experiment with {language === 'c' ? 'C' : 'Python'} code in real-time.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '20px',
                            marginBottom: '20px',
                        }}>
                            {/* Code Editor */}
                            <div style={{
                                background: 'rgba(0, 20, 30, 0.6)',
                                border: '1px solid rgba(0, 245, 255, 0.2)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                            }}>
                                <div style={{
                                    padding: '12px 16px',
                                    background: 'rgba(0,0,0,0.3)',
                                    borderBottom: '1px solid rgba(0,245,255,0.2)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                }}>
                                    <span style={{ color: accent, fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                                        📝 {language === 'c' ? 'main.c' : 'main.py'}
                                    </span>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button
                                            onClick={() => setCodingCode(getSampleCode())}
                                            style={{
                                                background: 'rgba(0,245,255,0.1)',
                                                border: '1px solid var(--accent-cyan)',
                                                color: 'var(--accent-cyan)',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                cursor: 'pointer',
                                                fontSize: '11px',
                                            }}
                                        >
                                            Reset
                                        </button>
                                        <button
                                            onClick={runCodingCode}
                                            disabled={isRunning}
                                            style={{
                                                background: isRunning ? '#555' : `linear-gradient(90deg, ${accent}, #00aacc)`,
                                                border: 'none',
                                                color: '#000',
                                                padding: '4px 16px',
                                                borderRadius: '20px',
                                                cursor: isRunning ? 'not-allowed' : 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: '11px',
                                            }}
                                        >
                                            {isRunning ? 'Running...' : '▶ Run'}
                                        </button>
                                    </div>
                                </div>
                                <div style={{ padding: '16px' }}>
                                    <CodeEditor
                                        code={codingCode}
                                        language={language}
                                        editable={true}
                                        onChange={setCodingCode}
                                    />
                                </div>
                            </div>

                            {/* Output Console */}
                            <div style={{
                                background: 'rgba(0, 20, 30, 0.6)',
                                border: '1px solid rgba(0, 245, 255, 0.2)',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <div style={{
                                    padding: '12px 16px',
                                    background: 'rgba(0,0,0,0.3)',
                                    borderBottom: '1px solid rgba(0,245,255,0.2)',
                                }}>
                                    <span style={{ color: accent, fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                                        💻 Output Console
                                    </span>
                                </div>
                                <div style={{ padding: '16px', flex: 1 }}>
                                    <pre style={{
                                        background: 'rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(0,245,255,0.3)',
                                        borderRadius: '8px',
                                        padding: '16px',
                                        color: codingOutput ? '#00ff88' : 'var(--text-muted)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '12px',
                                        overflow: 'auto',
                                        minHeight: '300px',
                                        maxHeight: '400px',
                                        whiteSpace: 'pre-wrap',
                                        wordBreak: 'break-word',
                                    }}>
                                        {codingOutput || 'Run your code to see output here...'}
                                    </pre>
                                    {codingError && (
                                        <pre style={{
                                            marginTop: '16px',
                                            background: 'rgba(255,45,85,0.1)',
                                            border: '1px solid #ff2d55',
                                            borderRadius: '8px',
                                            padding: '12px',
                                            color: '#ff6b8a',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '12px',
                                            overflow: 'auto',
                                        }}>
                                            ⚠️ Error:\n{codingError}
                                        </pre>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Tips */}
                        <div style={{
                            background: 'rgba(0, 20, 30, 0.6)',
                            border: '1px solid rgba(0, 245, 255, 0.2)',
                            borderRadius: '12px',
                            padding: '16px 20px',
                        }}>
                            <h4 style={{ color: accent, marginBottom: '8px' }}>💡 Tips</h4>
                            <ul style={{ color: 'var(--text-muted)', fontSize: '12px', lineHeight: '1.8', paddingLeft: '20px' }}>
                                <li>Write any {language === 'c' ? 'C' : 'Python'} code you want to test</li>
                                <li>Click Run to execute your code remotely</li>
                                <li>Make sure the backend server is running on port 3001</li>
                                <li>Use this playground to experiment with concepts from the lesson</li>
                            </ul>
                        </div>
                    </div>
                )}

                {tab === 'notes' && (
                    <div style={{ animation: 'fadeIn 0.3s ease' }}>
                        <h2 style={{
                            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22,
                            color: 'var(--text-primary)', marginBottom: 8,
                        }}>
                            Your Notes
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
                            Notes are automatically saved to your browser.
                        </p>
                        <textarea
                            placeholder="Take notes on this lesson...\n\n- Key concepts you learned\n- Questions you have\n- Code snippets you want to remember"
                            value={notes}
                            onChange={(e) => saveNotes(e.target.value)}
                            style={{
                                width: '100%', minHeight: 400,
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderRadius: 4, padding: 20,
                                fontFamily: 'var(--font-ui)', fontSize: 14, lineHeight: 1.7,
                                color: 'var(--text-primary)', resize: 'vertical', outline: 'none',
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
                padding: '14px 32px',
                background: 'var(--bg-secondary)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexShrink: 0,
            }}>
                <button
                    onClick={onPrev}
                    disabled={!hasPrev}
                    style={{
                        background: 'transparent',
                        border: `1px solid ${hasPrev ? 'var(--border)' : 'rgba(255,255,255,0.05)'}`,
                        borderRadius: 2, padding: '9px 20px',
                        cursor: hasPrev ? 'pointer' : 'not-allowed',
                        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
                        color: hasPrev ? 'var(--text-secondary)' : 'var(--text-muted)',
                        opacity: hasPrev ? 1 : 0.4, transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => hasPrev && (e.currentTarget.style.borderColor = accent)}
                    onMouseLeave={e => hasPrev && (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                    ← PREV
                </button>

                <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    color: 'var(--text-muted)', letterSpacing: '0.1em',
                }}>
                    <span style={{ color: accent }}>
                        {lesson.title.substring(0, 22)}{lesson.title.length > 22 ? '…' : ''}
                    </span>
                </div>

                <button
                    onClick={onNext}
                    disabled={!hasNext}
                    style={{
                        background: hasNext ? accent : 'transparent',
                        border: `1px solid ${hasNext ? accent : 'rgba(255,255,255,0.05)'}`,
                        borderRadius: 2, padding: '9px 20px',
                        cursor: hasNext ? 'pointer' : 'not-allowed',
                        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
                        color: hasNext ? 'var(--bg-primary)' : 'var(--text-muted)',
                        fontWeight: 700,
                        opacity: hasNext ? 1 : 0.4, transition: 'all 0.2s',
                    }}
                >
                    NEXT →
                </button>
            </div>
        </div>
    );
}