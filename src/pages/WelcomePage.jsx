import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MatrixRain from '../components/MatrixRain.jsx';
import GlitchTitle from '../components/GlitchTitle.jsx';
import LanguageCard from '../components/LanguageCard.jsx';
import { LANGUAGE_CARDS } from '../data/languageCards.js';

export default function WelcomePage() {
    const navigate = useNavigate();
    const [titleVisible, setTitleVisible] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [activeLearners, setActiveLearners] = useState(2347);
    const [openFaq, setOpenFaq] = useState(null);
    const [systemLogs, setSystemLogs] = useState([
        '> SYSTEM BOOT: v2.0.4 SECURE',
        '> NEURAL ENGINE: ONLINE',
        '> WAITING FOR LANGUAGE SELECTION'
    ]);

    useEffect(() => {
        const t = setTimeout(() => setTitleVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const learnerInterval = setInterval(() => {
            setActiveLearners(prev => {
                const change = Math.floor(Math.random() * 21) - 10;
                return Math.max(1200, Math.min(3800, prev + change));
            });
        }, 8000);

        const logInterval = setInterval(() => {
            const logMessages = [
                '> SCANNING TRAFFIC: 1.4 GB/S',
                '> ENCRYPTION LAYER: ACTIVE',
                '> CYBER DEFENSE: STANDBY',
                '> KERNEL INTEGRITY: VERIFIED',
                '> AI CORE: RESPONDING',
                '> USER SESSION: SECURE',
                '> MEMORY SCAN: CLEAN',
                '> INTRUSION DETECTION: ARMED',
                '> FIREWALL RULES: UPDATED',
                '> HASH VERIFICATION: OK',
            ];
            setSystemLogs(prev => [logMessages[Math.floor(Math.random() * logMessages.length)], ...prev.slice(0, 2)]);
        }, 5000);

        return () => {
            clearInterval(learnerInterval);
            clearInterval(logInterval);
        };
    }, []);

    const handleSelectLanguage = (lang) => {
        navigate(lang.path);
    };

    const formattedTime = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const totalModules = LANGUAGE_CARDS.reduce((acc, lang) => acc + (lang.modulesCount || 24), 0);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const faqs = [
        {
            q: 'Do I need prior programming experience?',
            a: 'No. Our modules are designed to take complete beginners from zero to competent. We start with memory models, data types, and control flow before moving into advanced exploitation and systems programming.'
        },
        {
            q: 'Which language should I start with?',
            a: 'If you want to understand how computers truly work at a low level — memory, pointers, OS internals — start with C. If you want faster results in automation, scripting, and security tooling, start with Python. Many of our top learners do both simultaneously.'
        },
        {
            q: 'How are the CTF challenges structured?',
            a: 'Each CTF challenge is categorized by difficulty (Rookie → Elite → Legend) and topic (buffer overflows, heap exploitation, reverse engineering, web exploitation, cryptography). Completing challenges earns XP and contributes to your global ranking.'
        },
        {
            q: 'Are the certificates recognized by employers?',
            a: 'Our blockchain-verifiable certificates are increasingly recognized in the cybersecurity industry. We partner with several Red Team consultancies and security firms who actively recruit from our leaderboard.'
        },
        {
            q: 'Can I learn on mobile?',
            a: 'Yes. Our platform is fully responsive and supports a mobile code editor with syntax highlighting. Some advanced kernel simulations require a desktop browser for full performance, but all theory modules are mobile-compatible.'
        },
        {
            q: 'What is the Neural Assist feature?',
            a: 'Neural Assist is our AI-powered hint system embedded in every exercise. Instead of giving you the answer, it analyzes your current code, identifies where you are stuck, and delivers targeted guidance — like having a senior developer looking over your shoulder.'
        },
    ];

    const learningPaths = [
        {
            icon: '🧱',
            title: 'FOUNDATIONS',
            level: 'ROOKIE',
            color: '#00f5ff',
            steps: ['Variables & memory layout', 'Pointers & references', 'File I/O & system calls', 'Basic networking sockets'],
        },
        {
            icon: '⚔️',
            title: 'EXPLOITATION',
            level: 'ADVANCED',
            color: '#ff6b00',
            steps: ['Buffer overflows', 'Format string attacks', 'Heap exploitation', 'Return-oriented programming'],
        },
        {
            icon: '🔬',
            title: 'REVERSE ENG.',
            level: 'ELITE',
            color: '#b347ff',
            steps: ['ELF & PE analysis', 'GDB & radare2', 'Anti-debug techniques', 'Firmware unpacking'],
        },
        {
            icon: '🤖',
            title: 'AI SECURITY',
            level: 'LEGEND',
            color: '#ff3366',
            steps: ['Adversarial ML attacks', 'Model inversion', 'Prompt injection', 'LLM red-teaming'],
        },
    ];

    const testimonials = [
        {
            handle: 'n0x_phantom',
            rank: 'ELITE #47',
            text: 'Six months ago I could barely write a for loop. Now I\'m writing custom shellcode for CTF competitions. The kernel simulation modules are insane — nothing else on the internet comes close.',
        },
        {
            handle: 'refract0r',
            rank: 'ADVANCED #203',
            text: 'The Python exploitation track taught me how to build real network scanners and fuzzing tools. I landed my first pentesting contract after completing the Offensive Scripting path.',
        },
        {
            handle: 'vx_entropy',
            rank: 'ELITE #91',
            text: 'I have a CS degree and still learned things here I never encountered in university. The heap exploitation deep-dive and the reverse engineering challenges are genuinely world-class.',
        },
    ];

    const techTopics = [
        { label: 'Buffer Overflow', tag: 'C', color: '#00f5ff' },
        { label: 'Heap Exploitation', tag: 'C', color: '#00f5ff' },
        { label: 'ROP Chains', tag: 'C', color: '#00f5ff' },
        { label: 'Kernel Modules', tag: 'C', color: '#00f5ff' },
        { label: 'Socket Programming', tag: 'C / PY', color: '#88ccff' },
        { label: 'Network Fuzzing', tag: 'Python', color: '#ffd700' },
        { label: 'Malware Scripting', tag: 'Python', color: '#ffd700' },
        { label: 'Exploit Automation', tag: 'Python', color: '#ffd700' },
        { label: 'Web Scraping & Crawling', tag: 'Python', color: '#ffd700' },
        { label: 'Reverse Engineering', tag: 'Both', color: '#b347ff' },
        { label: 'Cryptography', tag: 'Both', color: '#b347ff' },
        { label: 'CTF Challenges', tag: 'Both', color: '#b347ff' },
        { label: 'GDB / Radare2', tag: 'Tools', color: '#ff6b00' },
        { label: 'Wireshark & tcpdump', tag: 'Tools', color: '#ff6b00' },
        { label: 'pwntools', tag: 'Tools', color: '#ff6b00' },
        { label: 'Metasploit Framework', tag: 'Tools', color: '#ff6b00' },
    ];

    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            background: 'var(--bg-primary)',
            paddingBottom: '0'
        }}>
            <MatrixRain />

            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 700,
                height: 700,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 75%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Header */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                marginTop: '48px',
                marginBottom: '32px',
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)',
            }}>
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.3em',
                    color: 'var(--text-muted)',
                    marginBottom: 16,
                    textTransform: 'uppercase',
                }}>
                    <span style={{ color: 'var(--accent-cyan)' }}>▸</span> CYBERCODE LEARNING SYSTEM v2.0.4
                </div>

                <GlitchTitle text="CYBERCODE" />

                <div style={{
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 300,
                    fontSize: 18,
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.2em',
                    marginTop: 8,
                    textTransform: 'uppercase',
                }}>
                    SELECT YOUR LANGUAGE / BEGIN TRAINING
                </div>

                <div style={{
                    margin: '20px auto 0',
                    width: 240,
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
                    opacity: 0.6,
                }} />
            </div>

            {/* Blog Button */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '40px',
            }}>
                <button
                    onClick={() => navigate('/blog')}
                    style={{
                        background: 'linear-gradient(135deg, #ff6b00, var(--accent-cyan))',
                        border: 'none',
                        color: '#000',
                        padding: '12px 32px',
                        borderRadius: '40px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-mono)',
                        transition: '0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        boxShadow: '0 0 20px rgba(0,245,255,0.4)',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,255,0.8)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,255,0.4)';
                    }}
                >
                    <span style={{ fontSize: '20px' }}>📝</span>
                    <span>CHECK OUT OUR TECH BLOG</span>
                    <span style={{ fontSize: '20px' }}>→</span>
                </button>
            </div>

            {/* Language Cards */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                gap: 28,
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '0 20px',
                marginBottom: '40px'
            }}>
                {LANGUAGE_CARDS.map((lang, i) => (
                    <LanguageCard
                        key={lang.id}
                        lang={lang}
                        onSelect={handleSelectLanguage}
                        delay={300 + i * 150}
                    />
                ))}
            </div>

            {/* Mission Statement */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '800px',
                margin: '0 auto 48px',
                padding: '20px 28px',
                background: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(0, 245, 255, 0.35)',
                borderRadius: '24px',
                textAlign: 'center',
                fontFamily: 'var(--font-ui)',
                boxShadow: '0 0 30px rgba(0,245,255,0.1)'
            }}>
                <div style={{
                    fontSize: '13px',
                    letterSpacing: '1px',
                    color: 'var(--accent-cyan)',
                    marginBottom: '12px',
                    textTransform: 'uppercase'
                }}>
                    ⚡ CYBERCODE MISSION STATEMENT
                </div>
                <p style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'var(--text-secondary)',
                    margin: '0 0 16px 0'
                }}>
                    <strong>From zero to expert in cybersecurity and low-level systems.</strong> Our platform offers interactive modules, network simulations, and live challenges to master <strong style={{ color: 'var(--accent-cyan)' }}>C</strong> and <strong style={{ color: 'var(--accent-cyan)' }}>Python</strong>. You will learn how memory works, vulnerability exploitation, automation, and reverse engineering. We believe that the deepest understanding of security comes from understanding the machine itself — not just the tools that sit on top of it.
                </p>
                <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'var(--text-muted)',
                    margin: '0 0 16px 0'
                }}>
                    Every module is built by active security researchers and red team operators. You won't find theoretical fluff here — only hands-on, practical skills that transfer directly to real-world environments, bug bounty programs, and offensive security careers.
                </p>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '16px',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    borderTop: '1px dashed rgba(0,245,255,0.3)',
                    paddingTop: '16px',
                    marginTop: '8px'
                }}>
                    <span>🔹 50+ CTF challenges</span>
                    <span>🔹 Kernel simulations</span>
                    <span>🔹 Malware analysis</span>
                    <span>🔹 Offensive scripting</span>
                    <span>🔹 Elite community</span>
                    <span>🔹 AI-powered hints</span>
                    <span>🔹 Blockchain certificates</span>
                </div>
                <div style={{
                    marginTop: '16px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(0,245,255,0.7)'
                }}>
                    [ SYSTEM_READY ] // Choose a language and start the mission...
                </div>
            </div>

            {/* System Stats Grid */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                maxWidth: '900px',
                margin: '20px auto 32px',
                padding: '0 20px'
            }}>
                <div style={statCardStyle}>
                    <div style={statLabelStyle}>SYS TIME</div>
                    <div style={statValueStyle}>{formattedTime}</div>
                    <div style={statFooterStyle}>UTC+0 // SECURE</div>
                </div>
                <div style={statCardStyle}>
                    <div style={statLabelStyle}>ACTIVE USERS</div>
                    <div style={statValueStyle}>{activeLearners.toLocaleString()}</div>
                    <div style={statFooterStyle}>◉ REAL-TIME TRAFFIC</div>
                </div>
                <div style={statCardStyle}>
                    <div style={statLabelStyle}>TOTAL MODULES</div>
                    <div style={statValueStyle}>{totalModules}</div>
                    <div style={statFooterStyle}>ADVANCED TRACKS</div>
                </div>
                <div style={statCardStyle}>
                    <div style={statLabelStyle}>INTEGRITY</div>
                    <div style={statValueStyle}>99.98%</div>
                    <div style={statFooterStyle}>ENCRYPTED CHAIN</div>
                </div>
                <div style={statCardStyle}>
                    <div style={statLabelStyle}>COMMUNITY</div>
                    <div style={statValueStyle}>12.4K</div>
                    <div style={statFooterStyle}>DISCORD MEMBERS</div>
                </div>
                <div style={statCardStyle}>
                    <div style={statLabelStyle}>CTF SOLVED / WK</div>
                    <div style={statValueStyle}>340+</div>
                    <div style={statFooterStyle}>GLOBAL BOARD</div>
                </div>
            </div>

            {/* Learning Paths */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '1100px',
                margin: '0 auto 48px',
                padding: '0 20px',
                width: '100%',
            }}>
                <div style={sectionHeaderStyle}>
                    <span style={{ color: 'var(--accent-cyan)' }}>🗺</span> LEARNING PATHS // CHOOSE YOUR TRACK
                </div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                }}>
                    {learningPaths.map((path, i) => (
                        <div key={i} style={{
                            flex: '1',
                            minWidth: '220px',
                            background: 'rgba(0, 10, 20, 0.75)',
                            border: `1px solid ${path.color}55`,
                            borderTop: `3px solid ${path.color}`,
                            borderRadius: '16px',
                            padding: '20px',
                            fontFamily: 'var(--font-ui)',
                            boxShadow: `0 4px 20px ${path.color}15`,
                        }}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{path.icon}</div>
                            <div style={{ fontSize: '16px', fontWeight: 'bold', color: path.color, marginBottom: '4px' }}>{path.title}</div>
                            <div style={{
                                display: 'inline-block',
                                fontSize: '10px',
                                padding: '2px 8px',
                                borderRadius: '20px',
                                background: `${path.color}22`,
                                color: path.color,
                                marginBottom: '14px',
                                letterSpacing: '1px',
                            }}>{path.level}</div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {path.steps.map((step, j) => (
                                    <li key={j} style={{
                                        fontSize: '12px',
                                        color: 'var(--text-secondary)',
                                        padding: '5px 0',
                                        borderBottom: j < path.steps.length - 1 ? '1px dashed rgba(255,255,255,0.07)' : 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                    }}>
                                        <span style={{ color: path.color, fontSize: '10px' }}>▸</span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Paths are sequential but non-linear — unlock any module as your skills progress
                </div>
            </div>

            {/* Language Deep-Dive Section – Python & C */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '28px',
                maxWidth: '1100px',
                margin: '0 auto 48px',
                padding: '0 20px'
            }}>
                <div style={deepDiveCardStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid rgba(0,245,255,0.3)', paddingBottom: '10px' }}>
                        <span style={{ fontSize: '28px' }}>🐍</span>
                        <span style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--accent-cyan)' }}>PYTHON</span>
                        <span style={{ marginLeft: 'auto', fontSize: '11px', background: 'rgba(0,245,255,0.2)', padding: '2px 8px', borderRadius: '20px' }}>v3.12</span>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        <strong style={{ color: 'var(--accent-cyan)' }}>⚡ What does Python do?</strong><br />
                        • Artificial Intelligence & Machine Learning (TensorFlow, PyTorch)<br />
                        • Data analysis & science (Pandas, NumPy)<br />
                        • Web backend (Django, FastAPI)<br />
                        • Automation, scripting, crawling<br />
                        • Education & rapid prototyping<br />
                        • Cybersecurity (writing tools, exploits)
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '16px' }}>
                        <strong style={{ color: 'rgba(0,245,255,0.7)' }}>🛡 Security track highlights:</strong><br />
                        Build port scanners with raw sockets, write fuzzers that detect memory corruption in real binaries, automate exploitation with pwntools, and develop custom C2 frameworks. The Offensive Python track covers the full red-team lifecycle from reconnaissance to post-exploitation.
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', borderTop: '1px dashed rgba(0,245,255,0.3)', paddingTop: '12px', marginTop: '8px' }}>
                        🔥 Popularity: #1 (TIOBE 2025) • Over 15 million developers
                    </div>
                </div>

                <div style={deepDiveCardStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid rgba(0,245,255,0.3)', paddingBottom: '10px' }}>
                        <span style={{ fontSize: '28px' }}>⚙️</span>
                        <span style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--accent-cyan)' }}>C / C++</span>
                        <span style={{ marginLeft: 'auto', fontSize: '11px', background: 'rgba(0,245,255,0.2)', padding: '2px 8px', borderRadius: '20px' }}>C23 / C++26</span>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        <strong style={{ color: 'var(--accent-cyan)' }}>⚙️ What does C/C++ do?</strong><br />
                        • Operating systems (Windows, Linux kernel)<br />
                        • Drivers, embedded, IoT, microcontrollers<br />
                        • Games & graphics engines (Unreal Engine)<br />
                        • Compilers, virtual machines<br />
                        • High-frequency trading applications<br />
                        • Cybersecurity (exploit development, reverse engineering)
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '16px' }}>
                        <strong style={{ color: 'rgba(0,245,255,0.7)' }}>🛡 Security track highlights:</strong><br />
                        Understand stack frames at the assembly level, write your own heap allocator, implement a buffer overflow from scratch, and study real CVEs by reproducing them in our sandboxed lab. The Kernel Exploitation module lets you load a custom Linux kernel module and manipulate process credentials directly.
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', borderTop: '1px dashed rgba(0,245,255,0.3)', paddingTop: '12px', marginTop: '8px' }}>
                        💥 Raw performance • Total memory control • The foundation of all languages
                    </div>
                </div>
            </div>

            {/* Topics Tag Cloud */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '900px',
                margin: '0 auto 48px',
                padding: '24px 28px',
                background: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(0, 245, 255, 0.3)',
                borderRadius: '20px',
                fontFamily: 'var(--font-ui)',
            }}>
                <div style={sectionHeaderStyle}>
                    <span style={{ color: 'var(--accent-cyan)' }}>🗂</span> CURRICULUM TOPICS // WHAT YOU WILL LEARN
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                    {techTopics.map((topic, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: `${topic.color}10`,
                            border: `1px solid ${topic.color}40`,
                            borderRadius: '20px',
                            padding: '5px 12px',
                            fontSize: '12px',
                            color: 'var(--text-secondary)',
                        }}>
                            <span style={{ color: topic.color, fontSize: '10px' }}>●</span>
                            {topic.label}
                            <span style={{ fontSize: '10px', color: topic.color, background: `${topic.color}20`, padding: '1px 6px', borderRadius: '10px' }}>{topic.tag}</span>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '16px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '11px' }}>
                    <span><span style={{ color: '#00f5ff' }}>●</span> C / C++</span>
                    <span><span style={{ color: '#ffd700' }}>●</span> Python</span>
                    <span><span style={{ color: '#b347ff' }}>●</span> Both</span>
                    <span><span style={{ color: '#ff6b00' }}>●</span> Tools</span>
                </div>
            </div>

            {/* Testimonials */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '1100px',
                margin: '0 auto 48px',
                padding: '0 20px',
                width: '100%',
            }}>
                <div style={sectionHeaderStyle}>
                    <span style={{ color: 'var(--accent-cyan)' }}>💬</span> OPERATOR TESTIMONIALS // FROM THE COMMUNITY
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {testimonials.map((t, i) => (
                        <div key={i} style={{
                            flex: '1',
                            minWidth: '260px',
                            background: 'rgba(0, 10, 20, 0.7)',
                            border: '1px solid rgba(0,245,255,0.2)',
                            borderRadius: '16px',
                            padding: '20px',
                            fontFamily: 'var(--font-ui)',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-cyan)' }}>{t.handle}</div>
                                <div style={{
                                    fontSize: '10px',
                                    background: 'rgba(0,245,255,0.15)',
                                    border: '1px solid rgba(0,245,255,0.3)',
                                    padding: '2px 8px',
                                    borderRadius: '20px',
                                    color: 'var(--accent-cyan)',
                                }}>{t.rank}</div>
                            </div>
                            <div style={{ fontSize: '13px', lineHeight: '1.65', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                "{t.text}"
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Console & Core Features */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '24px',
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto 48px',
                padding: '0 20px'
            }}>
                <div style={consoleStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', borderBottom: '1px solid rgba(0,245,255,0.3)', paddingBottom: '8px' }}>
                        <span style={{ color: 'var(--accent-cyan)', fontSize: '14px' }}>▶</span>
                        <span style={{ fontSize: '12px', letterSpacing: '1px', color: 'var(--text-secondary)' }}>SYSTEM CONSOLE // LIVE FEED</span>
                        <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--accent-cyan)', animation: 'blink 1.5s infinite' }}>ACTIVE</span>
                    </div>
                    {systemLogs.map((log, idx) => (
                        <div key={idx} style={{
                            fontSize: '11px',
                            color: idx === 0 ? 'var(--accent-cyan)' : 'var(--text-muted)',
                            marginBottom: '8px',
                            fontFamily: 'monospace',
                            opacity: idx === 0 ? 1 : 0.7,
                            letterSpacing: '0.3px'
                        }}>{log}</div>
                    ))}
                    <div style={{ marginTop: '8px', fontSize: '10px', color: 'rgba(0,245,255,0.6)' }}>> _ awaiting input_</div>
                </div>

                <div style={techSpecsStyle}>
                    <div style={{ fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '1.5px', marginBottom: '14px', borderBottom: '1px solid rgba(0,245,255,0.3)', paddingBottom: '8px' }}>
                        ⚡ CORE FEATURES
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>NEURAL ASSIST</span><span style={{ color: 'var(--accent-cyan)' }}>ONLINE</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>REAL-TIME DEBUGGER</span><span style={{ color: 'var(--accent-cyan)' }}>READY</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>KERNEL SANDBOX</span><span style={{ color: 'var(--accent-cyan)' }}>ARMED</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>MOBILE EDITOR</span><span style={{ color: 'var(--accent-cyan)' }}>READY</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>CYBER RANKING</span><span style={{ color: 'var(--accent-cyan)' }}>GLOBAL #312</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>BLOCKCHAIN CERT</span><span style={{ color: 'var(--accent-cyan)' }}>VERIFIABLE</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>LATEST PATCH</span><span style={{ color: 'var(--accent-cyan)' }}>v2.0.4_secure</span>
                        </div>
                        <div style={{ marginTop: '6px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)' }} />
                        <div style={{ fontSize: '11px', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '4px' }}>🔒 QUANTUM ENCRYPTED SESSION</div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '800px',
                margin: '0 auto 48px',
                padding: '24px 28px',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(0, 245, 255, 0.3)',
                borderRadius: '20px',
                fontFamily: 'var(--font-ui)',
                width: '100%',
            }}>
                <div style={sectionHeaderStyle}>
                    <span style={{ color: 'var(--accent-cyan)' }}>❓</span> FREQUENTLY ASKED QUESTIONS
                </div>
                {faqs.map((faq, i) => (
                    <div key={i} style={{
                        borderBottom: i < faqs.length - 1 ? '1px solid rgba(0,245,255,0.1)' : 'none',
                        paddingBottom: '0',
                        marginBottom: '0',
                    }}>
                        <button
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            style={{
                                width: '100%',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '14px 0',
                                textAlign: 'left',
                                gap: '12px',
                            }}
                        >
                            <span style={{ fontSize: '13px', color: openFaq === i ? 'var(--accent-cyan)' : 'var(--text-secondary)', fontWeight: 'bold', letterSpacing: '0.3px' }}>
                                {faq.q}
                            </span>
                            <span style={{ color: 'var(--accent-cyan)', fontSize: '16px', flexShrink: 0 }}>
                                {openFaq === i ? '−' : '+'}
                            </span>
                        </button>
                        {openFaq === i && (
                            <div style={{
                                fontSize: '12px',
                                lineHeight: '1.7',
                                color: 'var(--text-muted)',
                                paddingBottom: '14px',
                                paddingLeft: '0',
                            }}>
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* System Archive Section */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '900px',
                margin: '20px auto 48px',
                padding: '24px 28px',
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(0, 245, 255, 0.4)',
                borderRadius: '20px',
                fontFamily: 'var(--font-ui)',
                textAlign: 'left'
            }}>
                <div style={{
                    fontSize: '14px',
                    color: 'var(--accent-cyan)',
                    letterSpacing: '1px',
                    marginBottom: '20px',
                    borderBottom: '1px solid rgba(0,245,255,0.3)',
                    paddingBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <span>📡</span> SYSTEM ARCHIVE // ADDITIONAL DATA
                    <span style={{ marginLeft: 'auto', fontSize: '10px', animation: 'blink 1.5s infinite' }}>LIVE</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <strong style={{ color: 'var(--accent-cyan)' }}>🔹 ROADMAP 2025:</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>Rust modules, Advanced Reverse Engineering, Kernel Driver Development, AI Security, Windows Internals, and heap spray techniques are all confirmed for the next release cycle.</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--accent-cyan)' }}>🔹 COMMUNITY:</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>Over 12,400 active members on Discord, 340+ challenges solved weekly. Weekly study groups, CTF team formation channels, and mentorship from operators ranked in the top 100.</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--accent-cyan)' }}>🔹 CERTIFICATIONS:</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>After completing each language, you receive a blockchain-verifiable certificate. Certificates include a tamper-proof hash logged to the Ethereum mainnet and a public verification URL you can share with recruiters.</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--accent-cyan)' }}>🔹 HIRING PARTNERS:</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>We maintain active relationships with Red Team consultancies, vulnerability research firms, and bug bounty platforms who scout our leaderboard. Top-ranked learners receive direct recruitment outreach.</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--accent-cyan)' }}>🔹 NEXT UPDATE:</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>v3.0 – addition of Go language + Windows exploitation modules + AI-assisted code review for student submissions (estimated: Q3 2025).</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--accent-cyan)' }}>🔹 PLATFORM UPTIME:</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>99.97% over the last 12 months. All lab environments are containerized and isolated. Kernel simulation sandboxes reset to clean state automatically after each session.</span>
                    </div>
                </div>
                <div style={{
                    marginTop: '20px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(0,245,255,0.5)',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(0,245,255,0.2)',
                    paddingTop: '12px'
                }}>
                    ▸ End of transmission // Scroll completed // More data available in training mode
                </div>
            </div>

            {/* Footer */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                background: 'rgba(0, 5, 10, 0.9)',
                backdropFilter: 'blur(8px)',
                borderTop: '1px solid rgba(0, 245, 255, 0.4)',
                borderBottom: 'none',
                borderRadius: '0',
                fontFamily: 'var(--font-ui)',
                textAlign: 'center',
                padding: '28px 24px 24px',
                marginTop: '0',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.5)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--accent-cyan)', marginBottom: '8px' }}>CYBERCODE</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>© 2025 Cybercode Labs</div>
                        <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Next‑gen cybersecurity training</div>
                    </div>
                    <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button onClick={() => navigate('/about')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
                        <button onClick={() => navigate('/docs')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Docs</button>
                        <button onClick={() => navigate('/community')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Community</button>
                        <button onClick={() => navigate('/support')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Support</button>
                        <button onClick={() => navigate('/blog')} style={{ color: 'var(--accent-cyan)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>📝 Blog</button>
                    </div>
                    <button onClick={scrollToTop} style={{
                        background: 'rgba(0,245,255,0.1)',
                        border: '1px solid var(--accent-cyan)',
                        color: 'var(--accent-cyan)',
                        padding: '6px 14px',
                        borderRadius: '30px',
                        fontSize: '11px',
                        cursor: 'pointer',
                    }}>▲ BACK TO TOP</button>
                </div>
                <div style={{
                    fontSize: '10px',
                    color: 'rgba(0,245,255,0.5)',
                    borderTop: '1px solid rgba(0,245,255,0.2)',
                    paddingTop: '16px',
                    marginTop: '20px',
                }}>
                    <span>SYS:ONLINE</span> <span style={{ color: 'var(--accent-cyan)', margin: '0 8px' }}>■</span>
                    <span>MODULES: C // PYTHON</span> <span style={{ color: 'var(--accent-cyan)', margin: '0 8px' }}>■</span>
                    <span>STATUS: READY</span> <span style={{ color: 'var(--accent-cyan)', margin: '0 8px' }}>■</span>
                    <span>UPTIME: 14D 8H 23M</span>
                    <span style={{ display: 'inline-block', marginLeft: '16px' }}>⚡ Encrypted connection</span>
                </div>
            </div>
        </div>
    );
}

// Styles
const statCardStyle = {
    background: 'rgba(0, 20, 30, 0.6)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(0, 245, 255, 0.25)',
    borderRadius: '12px',
    padding: '16px 24px',
    minWidth: '140px',
    textAlign: 'center',
    fontFamily: 'var(--font-mono)',
    boxShadow: '0 0 15px rgba(0,245,255,0.1)',
};

const statLabelStyle = {
    fontSize: '11px',
    color: 'var(--text-muted)',
    letterSpacing: '2px',
    marginBottom: '8px'
};

const statValueStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'var(--accent-cyan)',
    textShadow: '0 0 5px cyan'
};

const statFooterStyle = {
    fontSize: '10px',
    color: 'var(--text-secondary)',
    marginTop: '6px'
};

const deepDiveCardStyle = {
    flex: '1',
    minWidth: '260px',
    background: 'rgba(0, 20, 30, 0.75)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(0, 245, 255, 0.4)',
    borderRadius: '20px',
    padding: '20px',
    fontFamily: 'var(--font-ui)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.4), 0 0 12px rgba(0,245,255,0.2)'
};

const consoleStyle = {
    flex: '1',
    minWidth: '240px',
    background: 'rgba(0, 0, 0, 0.65)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(0, 245, 255, 0.3)',
    borderRadius: '12px',
    padding: '16px 20px',
    fontFamily: 'var(--font-mono)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
};

const techSpecsStyle = {
    flex: '1',
    minWidth: '240px',
    background: 'rgba(0, 0, 0, 0.65)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(0, 245, 255, 0.3)',
    borderRadius: '12px',
    padding: '16px 20px',
    fontFamily: 'var(--font-ui)'
};

const sectionHeaderStyle = {
    fontSize: '13px',
    color: 'var(--accent-cyan)',
    letterSpacing: '1.5px',
    marginBottom: '20px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '1px solid rgba(0,245,255,0.2)',
    paddingBottom: '10px',
};
