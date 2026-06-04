import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            borderTop: '1px solid rgba(0, 245, 255, 0.3)',
            marginTop: 'auto',
            padding: '24px 20px 20px',
            fontFamily: 'var(--font-ui)',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '30px',
            }}>
                {/* Brand column */}
                <div style={{ minWidth: '180px' }}>
                    <h3 style={{
                        fontSize: '16px',
                        color: 'var(--accent-cyan)',
                        marginBottom: '12px',
                        letterSpacing: '1px',
                    }}>CyberCode</h3>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        Interactive cybersecurity & programming platform.
                    </p>
                </div>

                {/* Navigation links columns */}
                <div>
                    <h4 style={{ fontSize: '13px', color: 'var(--accent-cyan)', marginBottom: '12px' }}>Explore</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}><a href="/blog" style={linkStyle}>Blog</a></li>
                        <li style={{ marginBottom: '8px' }}><a href="/about" style={linkStyle}>About Us</a></li>
                        <li style={{ marginBottom: '8px' }}><a href="/contact" style={linkStyle}>Contact</a></li>
                        <li style={{ marginBottom: '8px' }}><a href="/challenges" style={linkStyle}>CTF Challenges</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '13px', color: 'var(--accent-cyan)', marginBottom: '12px' }}>Resources</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}><a href="/docs" style={linkStyle}>Documentation</a></li>
                        <li style={{ marginBottom: '8px' }}><a href="/community" style={linkStyle}>Community</a></li>
                        <li style={{ marginBottom: '8px' }}><a href="/support" style={linkStyle}>Support</a></li>
                        <li style={{ marginBottom: '8px' }}><a href="/roadmap" style={linkStyle}>Roadmap</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '13px', color: 'var(--accent-cyan)', marginBottom: '12px' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
                        <li style={{ marginBottom: '8px' }}><a href="/terms" style={linkStyle}>Terms of Service</a></li>
                        <li style={{ marginBottom: '8px' }}><a href="/cookies" style={linkStyle}>Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(0, 245, 255, 0.2)',
                textAlign: 'center',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.5px',
            }}>
                <span>© {currentYear} CyberCode — All systems operational.</span>
                <span style={{ margin: '0 12px' }}>|</span>
                <span>v2.0.4 — Quantum encrypted</span>
            </div>
        </footer>
    );
}

const linkStyle = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '12px',
    transition: 'color 0.2s',
    fontFamily: 'var(--font-mono)',
};

// Adaugă un efect de hover (se poate pune într-un fișier CSS global)
// De exemplu, în global.css:
// a:hover { color: var(--accent-cyan) !important; }
// Pentru simplitate, lăsăm stilul inline, dar hover-ul nu merge inline.
// Recomand să adaugi într-un CSS: .footer-link:hover { color: #00f5ff; }
// Sau poți folosi styled-components.
// Pentru acest exemplu, voi adăuga un stil global sugerat.