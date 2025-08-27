import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const root = document.documentElement;
    
    console.log('ThemeProvider: Initializing with theme:', savedTheme);
    
    root.classList.remove('light', 'dark');
    root.classList.add(savedTheme);
    
    console.log('ThemeProvider: HTML classes after init:', root.classList.toString());
  }, []);

  return <>{children}</>;
}
