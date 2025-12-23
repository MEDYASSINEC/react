import React, { createContext, useContext, useState, useEffect } from 'react';

// Créer le contexte
const ThemeContext = createContext();

// Hook personnalisé pour utiliser le thème
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé dans un ThemeProvider');
  }
  return context;
};

// Provider du thème
export const ThemeProvider = ({ children }) => {
  // Récupérer le thème sauvegardé ou utiliser 'light' par défaut
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersTheme = window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";
    return savedTheme || systemPrefersTheme || 'light';
  });

  // Appliquer le thème au chargement et à chaque changement
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Fonction pour changer le thème
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Composant bouton pour changer le thème
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Changer le thème"
      title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
    >
      <div className="theme-toggle-slider">
        {theme === 'light' ? '☀️' : '🌙'}
      </div>
    </button>
  );
};