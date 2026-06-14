import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import CodeEditor from '../components/CodeEditor.jsx';

const API_URL = 'http://localhost:3001/api';

export default function Compiler() {
    const [language, setLanguage] = useState('c');
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const samples = {
        c: `#include <stdio.h>

int main() {
    printf("Hello, CyberCode!\\n");
    printf("C is powerful and fast!\\n");
    
    int a = 10, b = 20;
    printf("%d + %d = %d\\n", a, b, a + b);
    
    return 0;
}`,
        python: `# Welcome to CyberCode Python Compiler!
print("Hello, CyberCode!")
print("Python is awesome!")

a = 10
b = 20
print(f"{a} + {b} = {a + b}")

# Try a loop!
for i in range(5):
    print(f"Count: {i}")`
    };

    useEffect(() => {
        setCode(samples[language]);
        setOutput('');
        setError('');
    }, [language]);

    const runCode = async () => {
        setIsRunning(true);
        setOutput('');
        setError('');

        try {
            const response = await axios.post(`${API_URL}/execute`, {
                language,
                code,
                stdin: input
            });

            if (response.data.error) {
                setError(response.data.error);
            }
            if (response.data.output) {
                setOutput(response.data.output);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to execute code. Make sure the backend server is running.');
        } finally {
            setIsRunning(false);
        }
    };

    const clearOutput = () => {
        setOutput('');
        setError('');
        setInput('');
    };

    const resetCode = () => {
        setCode(samples[language]);
        clearOutput();
    };

    return (
        <>
            <Helmet>
                <title>Online Compiler - Run C and Python Code | CyberCode</title>
                <meta name="description" content="Execute C and Python code directly in your browser. Practice coding with our online compiler." />
            </Helmet>

            <div style={{
                background: 'var(--bg-primary)',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                    {/* Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '16px',
                        marginBottom: '24px'
                    }}>
                        <div>
                            <h1 style={{
                                fontSize: '32px',
                                fontWeight: 'bold',
                                color: 'var(--accent-cyan)',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                Online Compiler
                            </h1>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Write, run, and test your code in real-time
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button
                                onClick={() => window.location.href = '/'}
                                style={{
                                    background: 'rgba(0,245,255,0.1)',
                                    border: '1px solid var(--accent-cyan)',
                                    color: 'var(--accent-cyan)',
                                    padding: '8px 20px',
                                    borderRadius: '30px',
                                    cursor: 'pointer',
                                    fontSize: '12px'
                                }}
                            >
                                ← Back to Home
                            </button>
                        </div>
                    </div>

                    {/* Language Selector */}
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '20px',
                        borderBottom: '1px solid rgba(0,245,255,0.2)',
                        paddingBottom: '16px'
                    }}>
                        <button
                            onClick={() => setLanguage('c')}
                            style={{
                                background: language === 'c' ? 'linear-gradient(90deg, var(--accent-orange), #ff5500)' : 'rgba(0,245,255,0.1)',
                                border: 'none',
                                color: language === 'c' ? '#000' : 'var(--accent-cyan)',
                                padding: '10px 24px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            C Language
                        </button>
                        <button
                            onClick={() => setLanguage('python')}
                            style={{
                                background: language === 'python' ? 'linear-gradient(90deg, var(--accent-green), #00cc88)' : 'rgba(0,245,255,0.1)',
                                border: 'none',
                                color: language === 'python' ? '#000' : 'var(--accent-cyan)',
                                padding: '10px 24px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            Python
                        </button>
                    </div>

                    {/* Main Editor Area */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        marginBottom: '20px'
                    }}>
                        {/* Code Editor */}
                        <div style={{
                            background: 'rgba(0, 20, 30, 0.6)',
                            border: '1px solid rgba(0, 245, 255, 0.2)',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                padding: '12px 16px',
                                background: 'rgba(0,0,0,0.3)',
                                borderBottom: '1px solid rgba(0,245,255,0.2)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                                    📝 Code Editor
                                </span>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button
                                        onClick={resetCode}
                                        style={{
                                            background: 'rgba(0,245,255,0.1)',
                                            border: '1px solid var(--accent-cyan)',
                                            color: 'var(--accent-cyan)',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontSize: '11px'
                                        }}
                                    >
                                        Reset
                                    </button>
                                    <button
                                        onClick={runCode}
                                        disabled={isRunning}
                                        style={{
                                            background: isRunning ? '#555' : 'linear-gradient(90deg, var(--accent-cyan), #00aacc)',
                                            border: 'none',
                                            color: '#000',
                                            padding: '4px 16px',
                                            borderRadius: '20px',
                                            cursor: isRunning ? 'not-allowed' : 'pointer',
                                            fontWeight: 'bold',
                                            fontSize: '11px'
                                        }}
                                    >
                                        {isRunning ? 'Running...' : '▶ Run'}
                                    </button>
                                </div>
                            </div>
                            <div style={{ padding: '16px' }}>
                                <CodeEditor
                                    code={code}
                                    language={language}
                                    editable={true}
                                    onChange={setCode}
                                />
                            </div>
                        </div>

                        {/* Output Console */}
                        <div style={{
                            background: 'rgba(0, 20, 30, 0.6)',
                            border: '1px solid rgba(0, 245, 255, 0.2)',
                            borderRadius: '12px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                padding: '12px 16px',
                                background: 'rgba(0,0,0,0.3)',
                                borderBottom: '1px solid rgba(0,245,255,0.2)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                                    💻 Output Console
                                </span>
                                <button
                                    onClick={clearOutput}
                                    style={{
                                        background: 'rgba(0,245,255,0.1)',
                                        border: '1px solid var(--accent-cyan)',
                                        color: 'var(--accent-cyan)',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontSize: '11px'
                                    }}
                                >
                                    Clear
                                </button>
                            </div>
                            <div style={{ padding: '16px', flex: 1 }}>
                                {/* Input Section */}
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '8px', display: 'block' }}>
                                        Input (stdin):
                                    </label>
                                    <textarea
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Enter input for your program..."
                                        style={{
                                            width: '100%',
                                            padding: '8px',
                                            background: 'rgba(0,0,0,0.5)',
                                            border: '1px solid rgba(0,245,255,0.3)',
                                            borderRadius: '8px',
                                            color: 'var(--text-primary)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '12px',
                                            resize: 'vertical',
                                            minHeight: '80px'
                                        }}
                                    />
                                </div>

                                {/* Output */}
                                <div>
                                    <label style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '8px', display: 'block' }}>
                                        Output:
                                    </label>
                                    <pre style={{
                                        background: 'rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(0,245,255,0.3)',
                                        borderRadius: '8px',
                                        padding: '12px',
                                        color: output ? '#00ff88' : 'var(--text-muted)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '12px',
                                        overflow: 'auto',
                                        maxHeight: '200px',
                                        minHeight: '100px'
                                    }}>
                                        {output || 'Run your code to see output here...'}
                                    </pre>
                                </div>

                                {/* Errors */}
                                {error && (
                                    <div style={{ marginTop: '16px' }}>
                                        <label style={{ color: '#ff2d55', fontSize: '12px', marginBottom: '8px', display: 'block' }}>
                                            ⚠️ Errors:
                                        </label>
                                        <pre style={{
                                            background: 'rgba(255,45,85,0.1)',
                                            border: '1px solid #ff2d55',
                                            borderRadius: '8px',
                                            padding: '12px',
                                            color: '#ff6b8a',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '12px',
                                            overflow: 'auto'
                                        }}>
                                            {error}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sample Programs */}
                    <div style={{
                        background: 'rgba(0, 20, 30, 0.6)',
                        border: '1px solid rgba(0, 245, 255, 0.2)',
                        borderRadius: '12px',
                        padding: '20px'
                    }}>
                        <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>📚 Sample Programs</h3>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {language === 'c' ? (
                                <>
                                    <button onClick={() => setCode(samples.c)} style={sampleButtonStyle}>Hello World</button>
                                    <button onClick={() => setCode(`#include <stdio.h>\n\nint main() {\n    int n, sum = 0;\n    printf("Enter n: ");\n    scanf("%d", &n);\n    for(int i = 1; i <= n; i++) sum += i;\n    printf("Sum 1..%d = %d\\n", n, sum);\n    return 0;\n}`)} style={sampleButtonStyle}>Sum Calculator</button>
                                    <button onClick={() => setCode(`#include <stdio.h>\n\nint factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}\n\nint main() {\n    int n = 5;\n    printf("Factorial of %d = %d\\n", n, factorial(n));\n    return 0;\n}`)} style={sampleButtonStyle}>Factorial</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setCode(samples.python)} style={sampleButtonStyle}>Hello World</button>
                                    <button onClick={() => setCode(`n = int(input("Enter n: "))\nsum_n = sum(range(1, n+1))\nprint(f"Sum 1..{n} = {sum_n}")`)} style={sampleButtonStyle}>Sum Calculator</button>
                                    <button onClick={() => setCode(`def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        print(a, end=" ")\n        a, b = b, a + b\n    print()\n\nn = 10\nprint(f"First {n} Fibonacci numbers:")\nfibonacci(n)`)} style={sampleButtonStyle}>Fibonacci</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const sampleButtonStyle = {
    background: 'rgba(0,245,255,0.1)',
    border: '1px solid rgba(0,245,255,0.3)',
    color: 'var(--accent-cyan)',
    padding: '6px 14px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    transition: '0.2s'
};