import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// Custom hook untuk menggunakan Theme Context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

// Helper function untuk mendapatkan theme classes
export const getThemeClasses = (theme, lightClass = '', darkClass = '') => {
  return theme === 'light' ? lightClass : darkClass;
};

// Helper function untuk container classes
export const getContainerClasses = (theme) => {
  return `p-6 rounded-lg transition-all duration-300 ${
    theme === 'light' 
      ? 'bg-white text-gray-800 shadow-md' 
      : 'bg-gray-800 text-white shadow-xl'
  }`;
};

export default useTheme;