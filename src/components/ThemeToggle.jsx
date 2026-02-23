import { useEffect, useState, useCallback } from 'react';
import { BsCircleHalf, BsMoonStarsFill, BsSunFill } from 'react-icons/bs';



const ThemeToggle = () => {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark';
  });

  const applyTheme = useCallback((currentMode) => {
    document.documentElement.setAttribute('data-theme', currentMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
    applyTheme(mode);
  }, [mode, applyTheme]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const nextLabel = mode === 'dark' ? 'light mode' : 'dark mode';

  return (
    <button
      className={`theme-toggle theme-toggle-${mode}`}
      onClick={toggleMode}
      aria-label={`Switch to ${nextLabel}`}
      title={`Mode: ${mode} (click for ${nextLabel})`}
    >
      {mode === 'dark' ? <BsSunFill /> : <BsMoonStarsFill />}
    </button>
  );
};

export default ThemeToggle;
