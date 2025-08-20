import React from 'react';
import useLocalStorage from '../function/useLocalStorage';

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const styles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
    dark: {
      backgroundColor: '#121212',
      color: '#f5f5f5',
    },
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ ...styles[theme], }}>
      <h1>{theme === 'light' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      
    </div>
  );
};

export default ThemeToggle;