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

    const handleSelectLanguage = (lang) => {
        console.log('Selected language:', lang);
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
                    <strong>From zero to expert in cybersecurity and low-level systems.</strong> Our platform offers interactive modules, network simulations, and live challenges to master <strong style={{ color: 'var(--accent-cyan)' }}>C</strong> and <strong style={{ color: 'var(--accent-cyan)' }}>Python</strong>. You will learn how memory works, vulnerability exploitation, automation, and reverse engineering.
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
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', borderTop: '1px dashed rgba(0,245,255,0.3)', paddingTop: '12px', marginTop: '8px' }}>
                        💥 Raw performance • Total memory control • The foundation of all languages
                    </div>
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
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>Rust modules, Advanced Reverse Engineering, Kernel Driver Development, AI Security.</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--accent-cyan)' }}>🔹 COMMUNITY:</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>Over 12,400 active members on Discord, 340+ challenges solved weekly.</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--accent-cyan)' }}>🔹 CERTIFICATIONS:</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>After completing each language, you receive a blockchain-verifiable certificate.</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--accent-cyan)' }}>🔹 NEXT UPDATE:</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginLeft: '8px' }}>v3.0 – addition of Go language + Windows exploitation modules (estimated: Q3 2025).</span>
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
                        <button
                            onClick={() => navigate('/about')}
                            style={{ color: 'var(--text-secondary)', fontSize: '12px', textDecoration: 'none', transition: '0.2s', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                            onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                        >About</button>
                        <button
                            onClick={() => navigate('/docs')}
                            style={{ color: 'var(--text-secondary)', fontSize: '12px', textDecoration: 'none', transition: '0.2s', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                            onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                        >Docs</button>
                        <button
                            onClick={() => navigate('/community')}
                            style={{ color: 'var(--text-secondary)', fontSize: '12px', textDecoration: 'none', transition: '0.2s', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                            onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                        >Community</button>
                        <button
                            onClick={() => navigate('/support')}
                            style={{ color: 'var(--text-secondary)', fontSize: '12px', textDecoration: 'none', transition: '0.2s', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                            onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                        >Support</button>
                    </div>
                    <button onClick={scrollToTop} style={{
                        background: 'rgba(0,245,255,0.1)',
                        border: '1px solid var(--accent-cyan)',
                        color: 'var(--accent-cyan)',
                        padding: '6px 14px',
                        borderRadius: '30px',
                        fontSize: '11px',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-mono)',
                        transition: '0.2s'
                    }} onMouseEnter={e => { e.target.style.background = 'rgba(0,245,255,0.3)'; e.target.style.boxShadow = '0 0 8px cyan'; }} onMouseLeave={e => { e.target.style.background = 'rgba(0,245,255,0.1)'; e.target.style.boxShadow = 'none'; }}>
                        ▲ BACK TO TOP
                    </button>
                </div>
                <div style={{
                    fontSize: '10px',
                    color: 'rgba(0,245,255,0.5)',
                    borderTop: '1px solid rgba(0,245,255,0.2)',
                    paddingTop: '16px',
                    marginTop: '20px',
                    maxWidth: '1200px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
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

// Stiluri
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