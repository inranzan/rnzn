import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <button 
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-surface-light dark:bg-background-light shadow-sm border border-text-muted/20 text-text-main hover:text-primary transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
        >
            <span className="material-symbols-outlined" style={{ fontSize: '20px', display: 'block' }}>
                {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
        </button>
    );
}
