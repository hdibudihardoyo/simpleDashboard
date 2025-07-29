import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useUser } from '../../hooks/useUser';

export const Header = () => {
  const { theme, toggleTheme, accentColor } = useTheme();
  const { user } = useUser();


  return (
  <header className={`p-4 rounded-lg mb-6 transition-all duration-300 ${
    theme === 'light'
    ? 'bg-white text-gray-800 shadow-md'
    : 'bg-gray-800 text-white shadow-xl' 
    }`}>
      <div className="flex justify-between items-center">
        <h1 className={`text-2-xl font bold ${accentColor}-600`}>
          Dashboard
        </h1>

        <p className="text-sm opacity-70 ">
          Welcome to your dashboard {user.name} !
        </p>

        <div className="flex items-center space-x-4">
          <span className="text-sm">
            Current theme:
            <span className="font-semibold">
            {theme}  
            </span>
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors $(
              theme === 'light'
              ? 'bg-gray-100 hover:bg-gray-200'
              : 'bg-gray-700 hover:bg-gray-600'
              )`}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} /> }
            </button> 
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;