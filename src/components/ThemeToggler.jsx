import React, { useContext } from 'react';
import { Settings } from 'lucide-react';
import ThemeContext from '../contexts/ThemeContext'; // Import Context

// Komponen Pembantu untuk demonstrasi Context
const ThemeToggler = () => {
  const { theme, buttonTheme } = useContext(ThemeContext);

  return (
    <div className="space-y-4">
      <div className={`p-4 rounded border-2 ${
        theme === 'light' ? 'border-gray-200 bg-gray-50' : 'border-gray-600 bg-gray-700'
      }`}>
        <h4 className="font-semibold mb-2">Current Theme: {theme}</h4>
        <p className="mb-3">
          Klik tombol dibawah untuk mengubah tema aplikasi antara terang dan gelap
        </p>
        <button
          onClick={buttonTheme}
          className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
            theme === 'dark'
              ? 'bg-gray-800 text-white hover:bg-gray-500'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-200'
          }`}
        >
          <Settings size={16} />
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;