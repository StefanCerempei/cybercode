import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LanguageCard({ lang, delay }) {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const handleClick = () => {
        if (lang.path) {
            navigate(lang.path);
        }
    };

    return (
        <div
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
                cursor: 'pointer',
                width: '320px',
                background: `linear-gradient(145deg, 
          ${isHovered ? 'rgba(10, 25, 35, 0.95)' : 'rgba(5, 15, 25, 0.85)'}, 
          rgba(0, 5, 10, 0.9))`,
                backdropFilter: 'blur(12px)',
                borderRadius: '28px',
                border: `1px solid ${isHovered ? lang.accent : 'rgba(0, 245, 255, 0.2)'}`,
                boxShadow: isHovered
                    ? `0 0 30px ${lang.glowColor}, 0 10px 30px rgba(0,0,0,0.5)`
                    : '0 5px 20px rgba(0,0,0,0.3)',
                padding: '28px 20px 32px',
                transition: 'all 0.3s cubic-bezier(0.2,0.9,0.4,1.1)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Glow effect pe hover */}
            {isHovered && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${lang.accent}, transparent)`,
                }} />
            )}

            {/* Icon */}
            <div style={{
                color: lang.accent,
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
            }}>
                {lang.icon}
            </div>

            {/* Title */}
            <h2 style={{
                fontSize: '28px',
                fontWeight: '800',
                marginBottom: '8px',
                background: `linear-gradient(135deg, ${lang.accent}, #ffffff)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.5px',
            }}>
                {lang.label}
            </h2>

            {/* Tagline */}
            <p style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontWeight: '400',
            }}>
                {lang.tagline}
            </p>

            {/* Description */}
            <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                lineHeight: '1.5',
                minHeight: '60px',
            }}>
                {lang.description}
            </p>

            {/* Stats */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '24px',
                padding: '12px 0',
                borderTop: '1px solid rgba(0, 245, 255, 0.15)',
                borderBottom: '1px solid rgba(0, 245, 255, 0.15)',
            }}>
                {lang.stats.map((stat, idx) => (
                    <div key={idx} style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: lang.accent,
                        }}>
                            {stat.value}%
                        </div>
                        <div style={{
                            fontSize: '9px',
                            color: 'var(--text-muted)',
                            letterSpacing: '1px',
                            marginTop: '4px',
                        }}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Topics */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '6px',
                marginBottom: '24px',
            }}>
                {lang.topics.map((topic, idx) => (
                    <span key={idx} style={{
                        fontSize: '9px',
                        padding: '4px 10px',
                        background: 'rgba(0, 245, 255, 0.08)',
                        borderRadius: '20px',
                        color: 'var(--accent-cyan)',
                        letterSpacing: '0.5px',
                    }}>
            {topic}
          </span>
                ))}
            </div>

            {/* Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleClick();
                }}
                style={{
                    width: '100%',
                    padding: '12px',
                    background: `linear-gradient(90deg, ${lang.accent}, ${lang.accent === 'var(--accent-orange)' ? '#ff5500' : '#00cc88'})`,
                    border: 'none',
                    borderRadius: '40px',
                    color: '#000',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    transition: '0.2s',
                    opacity: isHovered ? 1 : 0.9,
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = isHovered ? 1 : 0.9}
            >
                INITIALIZE →
            </button>
        </div>
    );
}