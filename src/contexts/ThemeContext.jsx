import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [accentColor, setAccentColor] = useState('blue');


  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const changeAccentColor = (color) => {
    setAccentColor(color);
  };

  // membuat data lebih cepat diakses dari parent ke child 
  // menghindari props drilling
  const contextValue = {
    theme,
    accentColor,
    toggleTheme,
    changeAccentColor
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;