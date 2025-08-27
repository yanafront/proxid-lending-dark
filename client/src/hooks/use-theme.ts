import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
    
    // Принудительно применяем стили для светлой темы
    if (theme === 'light') {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
    
    // Отладочная информация
    console.log('Theme changed to:', theme);
    console.log('HTML classes:', root.classList.toString());
  }, [theme]);

  const toggleTheme = () => {
    console.log('Toggling theme from:', theme);
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
}
