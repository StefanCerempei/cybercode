import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'python', name: '🐍 Python' },
        { id: 'c-cpp', name: '⚡ C/C++' },
        { id: 'history', name: '📜 History' },
        { id: 'wow', name: '🚀 Futuristic' },
    ];

    const articles = [
        {
            id: 'python-birth',
            title: 'The Birth of Python: How a Christmas Project Changed Programming Forever',
            category: 'history',
            excerpt: 'In December 1989, Guido van Rossum started a hobby project during his Christmas break. He had no idea that this "side project" would become one of the most popular programming languages...',
            readTime: 8,
            date: 'December 25, 1989',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
            author: 'Guido van Rossum',
            color: '#3776AB'
        },
        {
            id: 'c-language-god',
            title: 'C: The God Language That Still Rules the World (50 Years Later)',
            category: 'c-cpp',
            excerpt: 'Created in 1972 by Dennis Ritchie, C is like Latin for programming - almost everything modern is built on its foundations. Linux, Windows, Python, even your toaster might have C inside...',
            readTime: 7,
            date: '1972',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
            author: 'Dennis Ritchie',
            color: '#00599C'
        },
        {
            id: 'ada-lovelace',
            title: 'The First Programmer in History Was a Woman (And You\'ve Never Heard of Her)',
            category: 'history',
            excerpt: 'In 1843, Ada Lovelace wrote the world\'s first computer algorithm. She imagined computers doing more than just math - art, music, and AI - a century before anyone else...',
            readTime: 6,
            date: '1843',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Ada_Lovelace.jpg',
            author: 'Ada Lovelace',
            color: '#9b4d96'
        },
        {
            id: 'eniac-programmers',
            title: 'The ENIAC Programmers: The Women Who Built the Digital Age',
            category: 'history',
            excerpt: 'Six women programmed the world\'s first general-purpose computer. They were the best mathematicians of their generation. And for 50 years, history forgot them...',
            readTime: 7,
            date: '1945',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Eniac.jpg',
            author: 'ENIAC Programmers',
            color: '#2c3e50'
        },
        {
            id: 'cpp-language',
            title: 'C++: The Language That Runs the World (Whether You Know It or Not)',
            category: 'c-cpp',
            excerpt: 'Your web browser? C++. Your video games? C++. Photoshop? C++. Even parts of Python are written in C++. Meet the unsung hero of modern computing...',
            readTime: 6,
            date: '1983',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
            author: 'Bjarne Stroustrup',
            color: '#f34b7d'
        },
        {
            id: 'python-metaclasses',
            title: 'Python\'s Hidden Magic: Metaclasses, Decorators, and Descriptors',
            category: 'python',
            excerpt: 'Python is simple, right? Wait until you discover metaclasses - code that writes code. Here\'s what happens under the hood when you type "class MyClass:"...',
            readTime: 9,
            date: '2024',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
            author: 'Python Core Devs',
            color: '#3776AB'
        },
        {
            id: 'quantum-programming',
            title: 'Quantum Programming: How to Write Code for Computers That Don\'t Exist Yet',
            category: 'wow',
            excerpt: 'Google\'s quantum computer solved a problem in 200 seconds that would take a supercomputer 10,000 years. Here\'s how developers are preparing for the quantum revolution...',
            readTime: 8,
            date: '2024',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/IBM_Quantum_Computer.jpg',
            author: 'Quantum Dev Team',
            color: '#6a1b9a'
        },
        {
            id: 'thompson-hack',
            title: 'The Thompson Hack: The Most Genius (and Terrifying) Computer Virus Ever Created',
            category: 'history',
            excerpt: 'Ken Thompson, co-creator of Unix, built a virus that couldn\'t be detected - even by reading the source code. It took the world 5 years to realize what he\'d done...',
            readTime: 7,
            date: '1983',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Ken_Thompson_%28scientist%29.jpg',
            author: 'Ken Thompson',
            color: '#d35400'
        },
        {
            id: 'rust-vs-cpp',
            title: 'Rust vs C++: The Battle for Systems Programming Supremacy',
            category: 'c-cpp',
            excerpt: 'For decades, C++ has been king of systems programming. But Mozilla created Rust, and now Microsoft, Google, and even Linux are rewriting critical components. Is C++ finally losing its throne?...',
            readTime: 8,
            date: '2024',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg',
            author: 'Systems Team',
            color: '#f74c00'
        },
        {
            id: 'python-async',
            title: 'Async/Await in Python: The Complete Deep Dive',
            category: 'python',
            excerpt: 'Python 3.5 introduced async/await, changing how we write concurrent code. But how does it actually work under the hood? The event loop, coroutines, and the future of Python concurrency...',
            readTime: 10,
            date: '2024',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
            author: 'Python Async Team',
            color: '#3776AB'
        },
        {
            id: 'ai-history',
            title: 'The Untold History of AI: From Turing to Transformers',
            category: 'wow',
            excerpt: 'AI isn\'t new. In 1950, Turing imagined machines that could think. In 1966, ELIZA fooled people into thinking it was human. Here\'s the 70-year journey that led to ChatGPT...',
            readTime: 9,
            date: '2024',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Turing_Test_version_3.png',
            author: 'AI History Project',
            color: '#00a67e'
        },
        {
            id: 'memory-management',
            title: 'Memory Management in C: Pointers, Allocation, and the Stack vs Heap',
            category: 'c-cpp',
            excerpt: 'C gives you ultimate power over memory - and the ultimate responsibility. One wrong pointer can crash everything. Here\'s everything you need to know about malloc, free, and the memory model...',
            readTime: 11,
            date: '2024',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
            author: 'Memory Experts',
            color: '#00599C'
        }
    ];

    const filteredArticles = activeCategory === 'all'
        ? articles
        : articles.filter(a => a.category === activeCategory);

    return (
        <>
            <Helmet>
                <title>CyberCode Blog - Programming History, Python, C++ & Tech Stories</title>
                <meta name="description" content="Fascinating articles about programming history, Python deep dives, C/C++ internals, and mind-blowing tech stories." />
            </Helmet>

            <div style={{ background: 'var(--bg-primary)' }}>
                <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                    <button onClick={() => navigate('/')} style={{
                        background: 'rgba(0,245,255,0.1)',
                        border: '1px solid var(--accent-cyan)',
                        color: 'var(--accent-cyan)',
                        padding: '8px 20px',
                        borderRadius: '30px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        marginBottom: '32px',
                        fontFamily: 'var(--font-mono)',
                    }}>← BACK TO HOME</button>

                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
                            CYBERCODE BLOG
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0 auto' }}>
                            Deep dives into programming history, language internals, and the future of code
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

                    {/* Articles Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                        gap: '28px',
                        marginBottom: '48px',
                    }}>
                        {filteredArticles.map(article => (
                            <div
                                key={article.id}
                                style={{
                                    background: 'rgba(0, 20, 30, 0.6)',
                                    border: '1px solid rgba(0, 245, 255, 0.2)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    transition: '0.3s',
                                    cursor: 'pointer',
                                }}
                                onClick={() => navigate(`/blog/${article.id}`)}
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
                                    background: `linear-gradient(135deg, ${article.color}20, ${article.color}05)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        style={{
                                            height: '100px',
                                            objectFit: 'contain',
                                            opacity: 0.85,
                                        }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '12px',
                                        right: '12px',
                                        background: 'rgba(0,0,0,0.7)',
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        fontSize: '11px',
                                        color: 'var(--accent-cyan)',
                                    }}>
                                        📖 {article.readTime} min read
                                    </div>
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <h3 style={{ color: 'var(--accent-cyan)', fontSize: '20px', fontWeight: 'bold', lineHeight: '1.3', marginBottom: '12px' }}>{article.title}</h3>
                                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                                        <span>📅 {article.date}</span>
                                        <span>✍️ {article.author}</span>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
                                        {article.excerpt}
                                    </p>
                                    <div style={{
                                        color: 'var(--accent-cyan)',
                                        fontSize: '13px',
                                        textAlign: 'center',
                                        paddingTop: '12px',
                                        borderTop: '1px solid rgba(0,245,255,0.2)',
                                    }}>
                                        READ FULL ARTICLE →
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(0,170,204,0.05))',
                        border: '1px solid rgba(0, 245, 255, 0.3)',
                        borderRadius: '20px',
                        padding: '50px 40px',
                        textAlign: 'center',
                        marginBottom: '40px',
                    }}>
                        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '28px', marginBottom: '12px' }}>Never Miss a Story</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '24px' }}>Get weekly programming insights delivered to your inbox</p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                style={{
                                    background: 'rgba(0,0,0,0.4)',
                                    border: '1px solid var(--accent-cyan)',
                                    padding: '14px 24px',
                                    borderRadius: '40px',
                                    color: 'var(--text-primary)',
                                    width: '300px',
                                    fontSize: '14px',
                                }}
                            />
                            <button style={{
                                background: 'linear-gradient(90deg, var(--accent-cyan), #00aacc)',
                                color: '#000',
                                border: 'none',
                                padding: '14px 32px',
                                borderRadius: '40px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '14px',
                            }}>Subscribe →</button>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '20px' }}>No spam. Unsubscribe anytime.</p>
                    </div>

                    {/* Footer */}
                    <div style={{
                        background: 'rgba(0, 5, 10, 0.95)',
                        backdropFilter: 'blur(8px)',
                        borderTop: '1px solid rgba(0, 245, 255, 0.4)',
                        borderRadius: '16px',
                        textAlign: 'center',
                        padding: '32px 24px 28px',
                        marginTop: '20px',
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--accent-cyan)', marginBottom: '8px' }}>CYBERCODE</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>© 2025 Cybercode Labs</div>
                            </div>
                            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <button onClick={() => navigate('/about')} style={{ color: 'var(--text-secondary)', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
                                <button onClick={() => navigate('/docs')} style={{ color: 'var(--text-secondary)', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}>Docs</button>
                                <button onClick={() => navigate('/community')} style={{ color: 'var(--text-secondary)', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}>Community</button>
                                <button onClick={() => navigate('/support')} style={{ color: 'var(--text-secondary)', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}>Support</button>
                                <button onClick={() => navigate('/blog')} style={{ color: 'var(--accent-cyan)', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}>Blog</button>
                            </div>
                            <button onClick={scrollToTop} style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', padding: '8px 18px', borderRadius: '30px', fontSize: '12px', cursor: 'pointer' }}>▲ BACK TO TOP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}