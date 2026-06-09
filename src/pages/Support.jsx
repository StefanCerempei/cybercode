import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function Support() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Support request:', formData);
        alert('Support request sent! We will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>Support – CyberCode</title>
                <meta name="description" content="Get help and support from CyberCode." />
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
                        Support
                    </h1>

                    <div style={{ height: '2px', background: 'linear-gradient(90deg, var(--accent-cyan), transparent)', marginBottom: '32px' }} />

                    <div style={{ background: 'rgba(0, 20, 30, 0.6)', border: '1px solid rgba(0, 245, 255, 0.2)', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>FAQ</h2>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ color: 'var(--accent-cyan)', fontSize: '16px', marginBottom: '8px' }}>Is CyberCode free?</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Yes! All core lessons are completely free.</p>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ color: 'var(--accent-cyan)', fontSize: '16px', marginBottom: '8px' }}>Do I get a certificate?</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Yes, after completing all lessons you receive a blockchain-verifiable certificate.</p>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ color: 'var(--accent-cyan)', fontSize: '16px', marginBottom: '8px' }}>What are the prerequisites?</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>No prior programming experience required. We start from basics.</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--accent-cyan)', fontSize: '16px', marginBottom: '8px' }}>How long does it take?</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Each track takes approximately 20-30 hours to complete at your own pace.</p>
                        </div>
                    </div>

                    <div style={{ background: 'rgba(0, 20, 30, 0.6)', border: '1px solid rgba(0, 245, 255, 0.2)', borderRadius: '16px', padding: '32px' }}>
                        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        background: 'rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(0,245,255,0.3)',
                                        borderRadius: '8px',
                                        color: 'var(--text-primary)',
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        background: 'rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(0,245,255,0.3)',
                                        borderRadius: '8px',
                                        color: 'var(--text-primary)',
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        background: 'rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(0,245,255,0.3)',
                                        borderRadius: '8px',
                                        color: 'var(--text-primary)',
                                    }}
                                />
                            </div>
                            <button type="submit" style={{
                                background: 'linear-gradient(90deg, var(--accent-cyan), #00aacc)',
                                border: 'none',
                                color: '#000',
                                padding: '12px 32px',
                                borderRadius: '30px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                            }}>SEND MESSAGE →</button>
                        </form>
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
                            <button onClick={() => navigate('/community')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Community</button>
                            <button onClick={() => navigate('/support')} style={{ color: 'var(--accent-cyan)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Support</button>
                        </div>
                        <button onClick={scrollToTop} style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', padding: '6px 14px', borderRadius: '30px', fontSize: '11px', cursor: 'pointer' }}>▲ BACK TO TOP</button>
                    </div>
                </div>
            </div>
        </>
    );
}