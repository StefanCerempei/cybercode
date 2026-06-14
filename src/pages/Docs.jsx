import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function Docs() {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>Documentation – CyberCode</title>
                <meta name="description" content="CyberCode documentation - learn how to use the platform." />
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
                        Documentation
                    </h1>

                    <div style={{ height: '2px', background: 'linear-gradient(90deg, var(--accent-cyan), transparent)', marginBottom: '32px' }} />

                    <div style={{ background: 'rgba(0, 20, 30, 0.6)', border: '1px solid rgba(0, 245, 255, 0.2)', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>Getting Started</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>1. Choose a language (C or Python) from the homepage</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>2. Navigate through lessons using the sidebar</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>3. Read the theory and study code examples</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>4. Complete interactive exercises</p>
                        <p style={{ color: 'var(--text-secondary)' }}>5. Earn certifications upon completion</p>
                    </div>

                    <div style={{ background: 'rgba(0, 20, 30, 0.6)', border: '1px solid rgba(0, 245, 255, 0.2)', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>C Programming Track</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• 14 comprehensive lessons</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• Pointers, memory management, structs</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• File I/O, preprocessor, bitwise operations</p>
                        <p style={{ color: 'var(--text-secondary)' }}>• Function pointers and dynamic allocation</p>

                        <h2 style={{ color: 'var(--accent-cyan)', marginTop: '32px', marginBottom: '16px' }}>Python Track</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• 14 comprehensive lessons</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• Data structures, OOP, modules</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• File handling, exceptions, comprehensions</p>
                        <p style={{ color: 'var(--text-secondary)' }}>• Lambda functions and functional programming</p>
                    </div>

                    <div style={{ background: 'rgba(0, 20, 30, 0.6)', border: '1px solid rgba(0, 245, 255, 0.2)', borderRadius: '16px', padding: '32px' }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>System Requirements</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• Modern web browser (Chrome, Firefox, Edge, Safari)</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>• Internet connection for loading lessons</p>
                        <p style={{ color: 'var(--text-secondary)' }}>• No additional software required - everything runs in browser</p>
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
                            <button onClick={() => navigate('/docs')} style={{ color: 'var(--accent-cyan)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Docs</button>
                            <button onClick={() => navigate('/community')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Community</button>
                            <button onClick={() => navigate('/support')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Support</button>
                        </div>
                        <button onClick={scrollToTop} style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', padding: '6px 14px', borderRadius: '30px', fontSize: '11px', cursor: 'pointer' }}>▲ BACK TO TOP</button>
                    </div>
                </div>
            </div>
        </>
    );
}