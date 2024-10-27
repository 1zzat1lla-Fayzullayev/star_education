/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const ThemeToggle = ({ onChange }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    if (onChange) onChange(newTheme);
  };

  return (
    <div onClick={toggleTheme}>
      {theme === 'light' ?
        <img src="/dark-mode.svg" alt="Dark mode" className='cursor-pointer' /> :
        <img src="/light-mode.svg" alt="Light mode" className='cursor-pointer' />
      }
    </div>
  );
};

export default ThemeToggle;
