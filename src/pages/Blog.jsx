import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'laptops', name: '💻 Laptops' },
        { id: 'coolers', name: '❄️ Coolers' },
        { id: 'accessories', name: '🎮 Accessories' },
    ];

    const products = [
        {
            id: 1,
            title: 'ASUS ROG Strix G18 18" Gaming Laptop',
            category: 'laptops',
            description: 'Intel Ultra 9 Processor 275HX, 2.5K 240Hz / 3ms, GeForce RTX 5060 8GB DDR7, 32 GB DDR5 RAM 1 TB SSD, Wi-Fi 7, Fast Charging, Windows 11 Pro, Office Lifetime License',
            price: '$1.905,81',
            rating: 4.8,
            affiliateLink: 'https://amzn.to/3BqX7Yz',
            image: 'https://m.media-amazon.com/images/I/71XrE8JqNgL._AC_SL1254_.jpg',
            features: ['18" QHD+ 240Hz Display', 'RTX 4080 Graphics', 'Liquid Metal Cooling']
        },
        {
            id: 2,
            title: 'MSI Raider GE78 HX',
            category: 'laptops',
            description: 'Intel Core i9-13980HX, NVIDIA RTX 4090, 64GB DDR5, 2TB SSD, 17" QHD+ 240Hz',
            price: '$3,299',
            rating: 4.9,
            affiliateLink: 'https://amzn.to/4cpXyZ8',
            image: 'https://m.media-amazon.com/images/I/81NxZ7q7VRL._AC_SL1500_.jpg',
            features: ['Per-Key RGB Keyboard', 'RTX 4090 16GB', 'DDR5 5600MHz']
        },
        {
            id: 3,
            title: 'Lenovo Legion Pro 7i',
            category: 'laptops',
            description: 'Intel Core i9-13900HX, NVIDIA RTX 4080, 32GB DDR5, 1TB SSD, 16" WQXGA 240Hz',
            price: '$2,199',
            rating: 4.7,
            affiliateLink: 'https://amzn.to/4coYzL9',
            image: 'https://m.media-amazon.com/images/I/71ZtYy7dRKL._AC_SL1500_.jpg',
            features: ['AI Chip LA1', 'Coldfront Cooling', '16" 500nit Display']
        },
        {
            id: 4,
            title: 'Alienware m18 R2',
            category: 'laptops',
            description: 'Intel Core i9-14900HX, NVIDIA RTX 4090, 64GB DDR5, 4TB SSD, 18" QHD+ 165Hz',
            price: '$3,899',
            rating: 4.9,
            affiliateLink: 'https://amzn.to/4cBxZuM',
            image: 'https://m.media-amazon.com/images/I/81TZZy7dRKL._AC_SL1500_.jpg',
            features: ['Alienware Cryo-Tech', 'Cherry Mechanical Keys', '4 Year Warranty']
        },
        {
            id: 5,
            title: 'Noctua NH-D15',
            category: 'coolers',
            description: 'Dual Tower CPU Cooler, 140mm Fans, Silent Operation, 6 Heat Pipes',
            price: '$109',
            rating: 4.9,
            affiliateLink: 'https://amzn.to/4d2XcFg',
            image: 'https://m.media-amazon.com/images/I/71ZxZtY7dRL._AC_SL1500_.jpg',
            features: ['6 Heat Pipes', 'Dual 140mm Fans', 'Ultra Silent']
        },
        {
            id: 6,
            title: 'Corsair iCUE H150i Elite',
            category: 'coolers',
            description: '360mm Liquid CPU Cooler, RGB Fans, LCD Display, Intel/AMD Support',
            price: '$199',
            rating: 4.8,
            affiliateLink: 'https://amzn.to/4e2YdGh',
            image: 'https://m.media-amazon.com/images/I/81NYZZy7dRL._AC_SL1500_.jpg',
            features: ['LCD Screen', 'RGB Fans', '5 Year Warranty']
        },
        {
            id: 7,
            title: 'Arctic Liquid Freezer III 360',
            category: 'coolers',
            description: 'All-in-One Liquid CPU Cooler, VRM Fan, 360mm Radiator, PWM Control',
            price: '$89',
            rating: 4.7,
            affiliateLink: 'https://amzn.to/3XzYwHj',
            image: 'https://m.media-amazon.com/images/I/61ZzZtY7dRL._AC_SL1500_.jpg',
            features: ['VRM Cooling Fan', 'PWM Controlled', 'Easy Installation']
        },
        {
            id: 8,
            title: 'Cooler Master Hyper 212',
            category: 'coolers',
            description: 'Direct Contact Heat Pipes, 120mm PWM Fan, Universal Bracket',
            price: '$44',
            rating: 4.6,
            affiliateLink: 'https://amzn.to/4i2XcGh',
            image: 'https://m.media-amazon.com/images/I/71NXYy7dRL._AC_SL1500_.jpg',
            features: ['4 Heat Pipes', 'Universal Socket', 'Quiet Operation']
        },
        {
            id: 9,
            title: 'Razer BlackWidow V4 Pro',
            category: 'accessories',
            description: 'Mechanical Gaming Keyboard, Yellow Switches, Command Dial, Wrist Rest',
            price: '$229',
            rating: 4.7,
            affiliateLink: 'https://amzn.to/4e3YcFh',
            image: 'https://m.media-amazon.com/images/I/71YZZy7dRL._AC_SL1500_.jpg',
            features: ['Yellow Switches', 'Command Dial', 'Magnetic Wrist Rest']
        },
        {
            id: 10,
            title: 'Logitech G502 X Plus',
            category: 'accessories',
            description: 'LIGHTFORCE Wireless Gaming Mouse, RGB, 25K DPI, 8 Buttons',
            price: '$159',
            rating: 4.8,
            affiliateLink: 'https://amzn.to/4cAxYuG',
            image: 'https://m.media-amazon.com/images/I/61ZXYy7dRL._AC_SL1500_.jpg',
            features: ['LIGHTFORCE Switches', 'Lightsync RGB', '13 Programmable Controls']
        },
        {
            id: 11,
            title: 'SteelSeries Apex Pro',
            category: 'accessories',
            description: 'OmniPoint Adjustable Switches, RGB Lighting, OLED Smart Display',
            price: '$199',
            rating: 4.8,
            affiliateLink: 'https://amzn.to/3XwYzJk',
            image: 'https://m.media-amazon.com/images/I/71ZZYy7dRL._AC_SL1500_.jpg',
            features: ['OmniPoint Switches', 'OLED Display', 'Magnetic Wrist Rest']
        },
        {
            id: 12,
            title: 'LG UltraGear 27" OLED',
            category: 'accessories',
            description: '240Hz 0.03ms Gaming Monitor, 1440p, G-Sync Compatible',
            price: '$899',
            rating: 4.9,
            affiliateLink: 'https://amzn.to/4e4ZdGh',
            image: 'https://m.media-amazon.com/images/I/81XYy7dRL._AC_SL1500_.jpg',
            features: ['OLED Display', '240Hz Refresh Rate', '0.03ms Response Time']
        }
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push('★');
        }
        for (let i = fullStars; i < 5; i++) {
            stars.push('☆');
        }
        return stars.join('');
    };

    return (
        <>
            <Helmet>
                <title>Blog & Reviews – CyberCode</title>
                <meta name="description" content="Gaming laptop reviews, cooling solutions, and tech recommendations. Best products for programmers and gamers." />
            </Helmet>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                background: 'var(--bg-primary)',
                overflowY: 'auto',
            }}>
                <div style={{ flex: 1, padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
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

                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
                            TECH BLOG
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0 auto' }}>
                            Curated reviews of the best gaming laptops, cooling solutions, and accessories for developers and gamers
                        </p>
                        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)', width: '300px', margin: '24px auto' }} />
                    </div>

                    {/* Categories */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '12px',
                        marginBottom: '48px',
                    }}>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                style={{
                                    background: activeCategory === cat.id ? 'linear-gradient(90deg, var(--accent-cyan), #00aacc)' : 'rgba(0,245,255,0.1)',
                                    border: `1px solid ${activeCategory === cat.id ? 'transparent' : 'var(--accent-cyan)'}`,
                                    color: activeCategory === cat.id ? '#000' : 'var(--accent-cyan)',
                                    padding: '10px 24px',
                                    borderRadius: '40px',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: '0.2s',
                                }}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '28px',
                        marginBottom: '48px',
                    }}>
                        {filteredProducts.map(product => (
                            <div key={product.id} style={{
                                background: 'rgba(0, 20, 30, 0.6)',
                                border: '1px solid rgba(0, 245, 255, 0.2)',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                transition: '0.3s',
                            }}
                                 onMouseEnter={e => {
                                     e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                 }}
                                 onMouseLeave={e => {
                                     e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.2)';
                                     e.currentTarget.style.transform = 'translateY(0)';
                                 }}>
                                <div style={{
                                    height: '200px',
                                    background: '#0a0a0a',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                        }}
                                        onError={(e) => {
                                            e.target.src = 'https://placehold.co/400x200/0a2a3a/00ffcc?text=Product+Image';
                                        }}
                                    />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '18px', fontWeight: 'bold' }}>{product.title}</h3>
                                        <span style={{ color: 'var(--accent-cyan)', fontSize: '20px', fontWeight: 'bold' }}>{product.price}</span>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '12px', lineHeight: '1.5' }}>
                                        {product.description}
                                    </p>
                                    <div style={{ marginBottom: '12px' }}>
                                        <span style={{ color: '#ffcc00', fontSize: '14px', marginRight: '8px' }}>{renderStars(product.rating)}</span>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>({product.rating})</span>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                        {product.features.map((feature, idx) => (
                                            <span key={idx} style={{
                                                background: 'rgba(0,245,255,0.1)',
                                                padding: '4px 10px',
                                                borderRadius: '20px',
                                                fontSize: '10px',
                                                color: 'var(--accent-cyan)',
                                            }}>
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={product.affiliateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'block',
                                            textAlign: 'center',
                                            background: 'linear-gradient(90deg, var(--accent-cyan), #00aacc)',
                                            color: '#000',
                                            padding: '12px',
                                            borderRadius: '30px',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            fontSize: '14px',
                                            transition: '0.2s',
                                        }}
                                        onMouseEnter={e => e.target.style.opacity = '0.9'}
                                        onMouseLeave={e => e.target.style.opacity = '1'}
                                    >
                                        CHECK ON AMAZON →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Affiliate Disclaimer */}
                    <div style={{
                        background: 'rgba(0, 20, 30, 0.4)',
                        border: '1px solid rgba(0, 245, 255, 0.15)',
                        borderRadius: '12px',
                        padding: '20px',
                        textAlign: 'center',
                        marginTop: '20px',
                    }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '11px' }}>
                            🔗 As an Amazon Associate, CyberCode earns from qualifying purchases. This helps us keep the platform free.
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
                        </div>
                        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <button onClick={() => navigate('/about')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
                            <button onClick={() => navigate('/docs')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Docs</button>
                            <button onClick={() => navigate('/community')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Community</button>
                            <button onClick={() => navigate('/support')} style={{ color: 'var(--text-secondary)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Support</button>
                            <button onClick={() => navigate('/blog')} style={{ color: 'var(--accent-cyan)', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Blog</button>
                        </div>
                        <button onClick={scrollToTop} style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', padding: '6px 14px', borderRadius: '30px', fontSize: '11px', cursor: 'pointer' }}>▲ BACK TO TOP</button>
                    </div>
                </div>
            </div>
        </>
    );
}