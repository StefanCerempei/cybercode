import React from 'react';

export const LANGUAGE_CARDS = [
    {
        id: 'c',
        label: 'C',
        path: '/learn-c',  // Adăugat path pentru navigare către LearnC
        tagline: 'The Language of the Machine',
        description: 'Master memory, pointers, and system-level power. Build the foundation everything else runs on.',
        accent: 'var(--accent-orange)',
        glow: 'var(--glow-orange)',
        glowColor: 'rgba(255, 107, 0, 0.3)',
        icon: (
            <svg viewBox="0 0 60 60" width="60" height="60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2.5" />
                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle"
                      fontFamily="Exo 2, sans-serif" fontWeight="800" fontSize="30" fill="currentColor">C</text>
            </svg>
        ),
        stats: [
            { label: 'SPEED', value: 100 },
            { label: 'CONTROL', value: 98 },
            { label: 'DIFFICULTY', value: 85 },
        ],
        topics: ['Pointers', 'Memory', 'Structs', 'I/O', 'Algorithms'],
    },
    {
        id: 'python',
        label: 'Python',
        path: '/learn-py',  // Adăugat path pentru navigare către LearnPY
        tagline: 'Power Through Simplicity',
        description: "From scripting to AI. Rapid, readable, and ruthlessly productive. The hacker's swiss army knife.",
        accent: 'var(--accent-green)',
        glow: 'var(--glow-green)',
        glowColor: 'rgba(0, 255, 136, 0.3)',
        icon: (
            <svg viewBox="0 0 60 60" width="60" height="60" fill="none">
                <path d="M30 4C18 4 20 10 20 18v4h20v3H16s-12 0-12 14 10 13 10 13h6v-6s-1-10 10-10h18s10 1 10-10V18C48 8 42 4 30 4z"
                      stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="24" cy="17" r="2.5" fill="currentColor" />
                <path d="M30 56C42 56 40 50 40 42v-4H20v-3h24s12 0 12-14-10-13-10-13h-6v6s1 10-10 10H12s-10-1-10-10v8c0 10 6 14 18 14z"
                      stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="36" cy="43" r="2.5" fill="currentColor" />
            </svg>
        ),
        stats: [
            { label: 'SPEED', value: 72 },
            { label: 'CONTROL', value: 65 },
            { label: 'DIFFICULTY', value: 30 },
        ],
        topics: ['Syntax', 'Functions', 'OOP', 'Files', 'Modules'],
    },
];

// Poți adăuga și o funcție helper pentru a găsi un limbaj după ID
export const getLanguageById = (id) => {
    return LANGUAGE_CARDS.find(lang => lang.id === id);
};

// Sau pentru a găsi după path
export const getLanguageByPath = (path) => {
    return LANGUAGE_CARDS.find(lang => lang.path === path);
};