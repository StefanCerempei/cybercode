import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MatrixRain from '../components/MatrixRain.jsx';
import GlitchTitle from '../components/GlitchTitle.jsx';
import LanguageCard from '../components/LanguageCard.jsx';
import { LANGUAGE_CARDS } from '../data/languageCards.js';
import Footer from '../components/Footer.jsx';

export default function WelcomePage({ onSelectLanguage }) {
    const [titleVisible, setTitleVisible] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [activeLearners, setActiveLearners] = useState(2347);
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
                '> USER SESSION: SECURE'
            ];
            setSystemLogs(prev => [logMessages[Math.floor(Math.random() * logMessages.length)], ...prev.slice(0, 2)]);
        }, 5000);

        return () => {
            clearInterval(learnerInterval);
            clearInterval(logInterval);
        };
    }, []);

    const formattedTime = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const totalModules = LANGUAGE_CARDS.reduce((acc, lang) => acc + (lang.modulesCount || 24), 0);

    return (
        <>
            <Helmet>
                <title>CyberCode – Platformă avansată de cybersecurity și programare în C și Python</title>
                <meta name="description" content="Învață C și Python printr-o platformă interactivă cu module de securitate cibernetică, exploatare vulnerabilități, reverse engineering și scripting ofensiv. Peste 50 de provocări CTF, kernel simulations și comunitate elite." />
                <meta name="keywords" content="cybersecurity, C programming, Python programming, learn C, learn Python, CTF challenges, reverse engineering, exploit development, offensive scripting" />
                <meta name="author" content="CyberCode" />
                <meta property="og:title" content="CyberCode – Platformă avansată de cybersecurity și programare" />
                <meta property="og:description" content="Învață C și Python prin module interactive de securitate cibernetică. Simulări de kernel, analiză malware, scripting ofensiv." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cybercode.space/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CyberCode – Platformă avansată de cybersecurity și programare" />
                <meta name="twitter:description" content="Învață C și Python prin module interactive de securitate cibernetică." />
                <link rel="canonical" href="https://cybercode.space/" />
            </Helmet>

            <div style={{
                position: 'relative',
                height: '100vh',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                background: 'var(--bg-primary)',
                paddingBottom: '32px'
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

                    <h1 style={{ margin: 0, lineHeight: 1.2 }}>
                        <GlitchTitle text="CYBERCODE" />
                    </h1>

                    <h2 style={{
                        fontFamily: 'var(--font-ui)',
                        fontWeight: 300,
                        fontSize: 18,
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.2em',
                        marginTop: 8,
                        textTransform: 'uppercase',
                    }}>
                        SELECT YOUR LANGUAGE / BEGIN TRAINING
                    </h2>

                    <div style={{
                        margin: '20px auto 0',
                        width: 240,
                        height: 1,
                        background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
                        opacity: 0.6,
                    }} />
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
                            onSelect={onSelectLanguage}
                            delay={300 + i * 150}
                        />
                    ))}
                </div>

                {/* ===== MISSION STATEMENT ===== */}
                <section style={{
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
                    <h2 style={{
                        fontSize: '13px',
                        letterSpacing: '1px',
                        color: 'var(--accent-cyan)',
                        marginBottom: '12px',
                        textTransform: 'uppercase'
                    }}>
                        ⚡ CYBERCODE MISSION STATEMENT
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        margin: '0 0 16px 0'
                    }}>
                        <strong>From zero to expert in cybersecurity and low-level systems.</strong> Our platform offers interactive modules, network simulations, and live challenges to master <strong style={{ color: 'var(--accent-cyan)' }}>C</strong> and <strong style={{ color: 'var(--accent-cyan)' }}>Python</strong>. You will learn memory management, vulnerability exploitation, automation, and reverse engineering.
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
                        <span>🔹 50+ CTF Challenges</span>
                        <span>🔹 Kernel Simulations</span>
                        <span>🔹 Malware Analysis</span>
                        <span>🔹 Offensive Scripting</span>
                        <span>🔹 Elite Community</span>
                    </div>
                    <div style={{
                        marginTop: '16px',
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: 'rgba(0,245,255,0.7)'
                    }}>
                        [ SYSTEM_READY ] // Choose a language and begin your mission...
                    </div>
                </section>

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
                    <section style={deepDiveCardStyle}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid rgba(0,245,255,0.3)', paddingBottom: '10px' }}>
                            <span style={{ fontSize: '28px' }}>🐍</span>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--accent-cyan)', margin: 0 }}>PYTHON</h3>
                            <span style={{ marginLeft: 'auto', fontSize: '11px', background: 'rgba(0,245,255,0.2)', padding: '2px 8px', borderRadius: '20px' }}>v3.12</span>
                        </div>
                        <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            <strong style={{ color: 'var(--accent-cyan)' }}>⚡ What does Python do?</strong><br />
                            • Artificial Intelligence & Machine Learning (TensorFlow, PyTorch)<br />
                            • Data analysis & science (Pandas, NumPy)<br />
                            • Web Backend (Django, FastAPI)<br />
                            • Automation, scripting, crawling<br />
                            • Education & rapid prototyping<br />
                            • Cybersecurity (writing tools, exploits)
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', borderTop: '1px dashed rgba(0,245,255,0.3)', paddingTop: '12px', marginTop: '8px' }}>
                            🔥 Popularity: #1 (TIOBE 2025) • Over 15 million developers
                        </div>
                    </section>

                    <section style={deepDiveCardStyle}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid rgba(0,245,255,0.3)', paddingBottom: '10px' }}>
                            <span style={{ fontSize: '28px' }}>⚙️</span>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--accent-cyan)', margin: 0 }}>C / C++</h3>
                            <span style={{ marginLeft: 'auto', fontSize: '11px', background: 'rgba(0,245,255,0.2)', padding: '2px 8px', borderRadius: '20px' }}>C23 / C++26</span>
                        </div>
                        <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            <strong style={{ color: 'var(--accent-cyan)' }}>⚙️ What does C / C++ do?</strong><br />
                            • Operating systems (Windows, Linux kernel)<br />
                            • Drivers, embedded hardware, IoT, microcontrollers<br />
                            • Games & graphics engines (Unreal Engine)<br />
                            • Compilers, virtual machines<br />
                            • High-frequency trading applications<br />
                            • Cybersecurity (exploit development, reverse engineering)
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', borderTop: '1px dashed rgba(0,245,255,0.3)', paddingTop: '12px', marginTop: '8px' }}>
                            💥 Raw performance • Total memory control • The foundation of all programming
                        </div>
                    </section>
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
                        <h3 style={{ fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '1.5px', marginBottom: '14px', borderBottom: '1px solid rgba(0,245,255,0.3)', paddingBottom: '8px' }}>
                            ⚡ CORE FEATURES
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>NEURAL ASSIST</span><span style={{ color: 'var(--accent-cyan)' }}>ONLINE</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>REAL-TIME DEBUGGER</span><span style={{ color: 'var(--accent-cyan)' }}>READY</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>CYBER RANKING</span><span style={{ color: 'var(--accent-cyan)' }}>GLOBAL #312</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>LATEST PATCH</span><span style={{ color: 'var(--accent-cyan)' }}>v2.0.4_secure</span>
                            </div>
                            <div style={{ marginTop: '6px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)' }} />
                            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '4px' }}>🔒 QUANTUM ENCRYPTED SESSION</div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer style={{
                    position: 'relative',
                    zIndex: 2,
                    marginTop: 'auto',
                    marginBottom: '24px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.15em',
                    display: 'flex',
                    gap: 32,
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    borderTop: '1px solid rgba(0,245,255,0.15)',
                    paddingTop: '20px',
                    width: '100%'
                }}>
                    <span>SYS:ONLINE</span>
                    <span style={{ color: 'var(--accent-cyan)', animation: 'blink 1.5s infinite' }}>■</span>
                    <span>MODULES: C // PYTHON</span>
                    <span style={{ color: 'var(--accent-cyan)', animation: 'blink 1.5s infinite' }}>■</span>
                    <span>STATUS: READY</span>
                    <span style={{ color: 'var(--accent-cyan)', animation: 'blink 1.5s infinite' }}>■</span>
                    <span>UPTIME: 14D 8H 23M</span>
                </footer>

                {/* ===== EXTRA SCROLL SECTION ===== */}
                <section style={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '900px',
                    margin: '20px auto 40px',
                    padding: '24px 28px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(0, 245, 255, 0.4)',
                    borderRadius: '20px',
                    fontFamily: 'var(--font-ui)',
                    textAlign: 'left'
                }}>
                    <h3 style={{
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
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                            <strong style={{ color: 'var(--accent-cyan)' }}>🔹 ROADMAP:</strong>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>Rust integration modules, advanced Reverse Engineering, Kernel Driver Development, AI Security tracks.</span>
                        </div>
                        <div>
                            <strong style={{ color: 'var(--accent-cyan)' }}>🔹 COMMUNITY:</strong>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>Over 12,400 active Discord members with 340+ cyber challenges resolved weekly.</span>
                        </div>
                        <div>
                            <strong style={{ color: 'var(--accent-cyan)' }}>🔹 CERTIFICATIONS:</strong>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>Earn a blockchain-verifiable completion certificate upon mastering each specialized track.</span>
                        </div>
                        <div>
                            <strong style={{ color: 'var(--accent-cyan)' }}>🔹 NEXT UPDATE:</strong>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>v3.0 – incorporating Go programming language + advanced Windows exploitation matrix (ETA: Q3).</span>
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
                </section>
            </div>
        </>
    );
}

<Footer />

// Reusable custom styles
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