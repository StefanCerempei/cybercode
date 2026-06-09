import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function Community() {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>Community – CyberCode</title>
                <meta name="description" content="Join the CyberCode community of cybersecurity enthusiasts." />
            </Helmet>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                background: 'var(--bg-primary)',
                overflowY: 'auto',
            }}>
                <div style={{ flex: 1, padding: '60px 20px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
                    <button onClick={() => navigate('/')} style={{
                        background: 'rgba(0,245,255,0.1)',
                        border: '1px solid var(--accent-cyan)',
                        color: 'var(--accent-cyan)',
                        padding: '8px 20px',
                        borderRadius: '30px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        marginBottom: '32px',
                    }}>← BACK TO HOME</button>

                    <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--accent-cyan)', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
                        Community
                    </h1>

                    <div style={{ height: '2px', background: 'linear-gradient(90deg, var(--accent-cyan), transparent)', marginBottom: '32px' }} />

                    <div style={{ background: 'rgba(0, 20, 30, 0.6)', border: '1px solid rgba(0, 245, 255, 0.2)', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>Join Our Discord</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            Connect with over 12,400 active members, participate in discussions, get help with challenges, and collaborate on projects.
                        </p>
                        <button style={{
                            background: 'linear-gradient(90deg, var(--accent-cyan), #00aacc)',
                            border: 'none',
                            color: '#000',
                            padding: '12px 32px',
                            borderRadius: '30px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}>JOIN DISCORD →</button>
                    </div>

                    <div style={{ background: 'rgba(0, 20, 30, 0.6)', border: '1px solid rgba(0, 245, 255, 0.2)', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>GitHub</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            Contribute to open-source security tools, share your solutions, and collaborate on projects.
                        </p>
                        <button style={{
                            background: 'rgba(0,245,255,0.1)',
                            border: '1px solid var(--accent-cyan)',
                            color: 'var(--accent-cyan)',
                            padding: '12px 32px',
                            borderRadius: '30px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}>VISIT GITHUB →</button>
                    </div>

                    <div style={{ background: 'rgba(0, 20, 30, 0.6)', border: '1px solid rgba(0, 245, 255, 0.2)', borderRadius: '16px', padding: '32px' }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>Community Events</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• Weekly CTF challenges</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• Monthly hackathons</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• Guest lectures from industry experts</p>
                        <p style={{ color: 'var(--text-secondary)' }}>• Study groups and mentorship programs</p>
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
                        </div>
                        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <button onClick={() => navigate('/about')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
                            <button onClick={() => navigate('/docs')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Docs</button>
                            <button onClick={() => navigate('/community')} style={{ color: 'var(--accent-cyan)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Community</button>
                            <button onClick={() => navigate('/support')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Support</button>
                        </div>
                        <button onClick={scrollToTop} style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', padding: '6px 14px', borderRadius: '30px', fontSize: '11px', cursor: 'pointer' }}>▲ BACK TO TOP</button>
                    </div>
                </div>
            </div>
        </>
    );
}