import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>About – CyberCode</title>
                <meta name="description" content="Learn about CyberCode - the next-gen cybersecurity training platform." />
                <meta property="og:title" content="About – CyberCode" />
                <meta property="og:description" content="Learn about CyberCode - the next-gen cybersecurity training platform." />
            </Helmet>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                background: 'var(--bg-primary)',
                overflowY: 'auto',
            }}>
                <div style={{ flex: 1, padding: '60px 20px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            background: 'rgba(0,245,255,0.1)',
                            border: '1px solid var(--accent-cyan)',
                            color: 'var(--accent-cyan)',
                            padding: '8px 20px',
                            borderRadius: '30px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-mono)',
                            marginBottom: '32px',
                            transition: '0.2s',
                        }}
                        onMouseEnter={e => { e.target.style.background = 'rgba(0,245,255,0.3)'; }}
                        onMouseLeave={e => { e.target.style.background = 'rgba(0,245,255,0.1)'; }}
                    >
                        ← BACK TO HOME
                    </button>

                    <h1 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        color: 'var(--accent-cyan)',
                        marginBottom: '16px',
                        fontFamily: 'var(--font-mono)',
                    }}>
                        About CyberCode
                    </h1>

                    <div style={{
                        height: '2px',
                        background: 'linear-gradient(90deg, var(--accent-cyan), transparent)',
                        marginBottom: '32px',
                    }} />

                    <div style={{
                        background: 'rgba(0, 20, 30, 0.6)',
                        border: '1px solid rgba(0, 245, 255, 0.2)',
                        borderRadius: '16px',
                        padding: '32px',
                        marginBottom: '24px',
                    }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>Our Mission</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                            CyberCode was founded with a single mission: to bridge the gap between theoretical programming knowledge and real-world cybersecurity skills. We believe that understanding low-level systems, memory management, and exploit development is essential for the next generation of security professionals.
                        </p>

                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>What We Offer</h2>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '24px' }}>
                            <li>Interactive C and Python programming lessons</li>
                            <li>Real-time code execution and debugging</li>
                            <li>CTF-style challenges and exercises</li>
                            <li>Memory corruption and exploit development labs</li>
                            <li>Network security simulations</li>
                            <li>Blockchain-verifiable certifications</li>
                        </ul>
                    </div>

                    <div style={{
                        background: 'rgba(0, 20, 30, 0.6)',
                        border: '1px solid rgba(0, 245, 255, 0.2)',
                        borderRadius: '16px',
                        padding: '32px',
                    }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>Our Team</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            CyberCode is built by a team of cybersecurity professionals, systems programmers, and educators with decades of combined experience. We've worked at leading tech companies, contributed to open-source security tools, and taught thousands of students worldwide.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    width: '100%',
                    background: 'rgba(0, 5, 10, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderTop: '1px solid rgba(0, 245, 255, 0.4)',
                    textAlign: 'center',
                    padding: '28px 24px 24px',
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--accent-cyan)', marginBottom: '8px' }}>CYBERCODE</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>© 2025 Cybercode Labs</div>
                            <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Next‑gen cybersecurity training</div>
                        </div>
                        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <button onClick={() => navigate('/about')} style={{ color: 'var(--accent-cyan)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
                            <button onClick={() => navigate('/docs')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Docs</button>
                            <button onClick={() => navigate('/community')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Community</button>
                            <button onClick={() => navigate('/support')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Support</button>
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
                </div>
            </div>
        </>
    );
}