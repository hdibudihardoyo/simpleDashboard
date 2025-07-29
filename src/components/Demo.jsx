import { Bell, Globe, Icon, Settings } from "lucide-react";
import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const UserContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [accentColor, setAccentColor] = useState("#007bff");
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
}

const changeAccentColor = (color) => {
  setAccentColor(color) ;
};

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
)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState ({
    name : "Hadiii", 
    role : "Developer",
    preferences : {notifications:true, languange:'id'}
    });

  const updateUser = (newUserData) => {
    setUser((prev) => ({ ...prev, ...newUserData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
};

const Header = () => {
  const { theme, toggleTheme, accentColor } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

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

const Sidebar = () => {
  const { theme, accentColor } = useContext(ThemeContext);

  const menuItems = [
    {icon : User, label : 'Profile', id: 'profile'},
    {icon : Settings, label : 'Settings', id: 'settings'},
    {icon : Bell, label : 'Notifications', id: 'notifications'},
    {icon : Globe, label : 'Language', id: 'language'}
  ]
  return (
    <aside className={`p-4 rounded-lg transition-all duration-300 ${theme === 'light' 
     ? 'bg-white text-gray-800 shadow-md' 
     : 'bg-gray-800 text-white shadow-xl'}`}>
      <h2 className={`text-lg font-semibold mb-4 text-${accentColor}-600`}>
        Menu
      </h2>
      <nav className="space-y-2">
        {menuItems.map(({icon: Icon, label, id}) => (
          <button
            key={id}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              theme === 'light' 
              ? 'bg-gray-100 text-gray-700' 
              : 'bg-gray-700 text-gray-300'
            }`}
          >
            <Icon size={20} />
            <span>
              {label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
};


const UserProfile = () => {
  const { theme, accentColor } = useContext(ThemeContext);
  const { user, updateUser } = useContext(UserContext);

  const handleNameChange = (e) => {
    updateUser({ name: e.target.value });
  };

  const toggleNotifications = () => {
    updateUser({ 
      preferences: {
      ...user.preferences,
      notifications: !user.preferences.notifications
    }
  });
}

return(
  <div className={`p-6 rounded-lg transition-all duration-300 ${
    theme === 'light' 
    ? 'bg-white text-gray-800 shadow-md' 
    : 'bg-gray-800 text-white shadow-xl'
  }`}
  >
    <h2 className={`text-xl font-semibold mb-4 text-${accentColor}-600`}>
      User Profile
    </h2>

  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium mb-2">
        Name:
      </label>
      <input
        type="text"
        value={user.name}
        onChange={handleNameChange}
        className={`w-full p-2 rounded border transition-colors ${
          theme === 'light' 
          ? 'border-gray-300 bg-white text-gray-800' 
          : 'border-gray-600 bg-gray-700 text-white'
        }`}
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">
        Role:
      </label>
      <p className={`p-2 rounded ${
        theme === 'light' 
        ? 'bg-gray-100' 
        : 'bg-gray-700'
        }`}>
        {user.role}
      </p>
    </div>

    <div className="flex items-center gap-3">
      <input 
      type="checkbox" 
      id="notifications"
      checked={user.preferences.notifications}
      onChange={toggleNotifications}
      className="w-4 h-4"
      />
      <label className="text-sm" htmlFor="notifications">
        Enable Notifications
      </label>
    </div>
   </div>
  </div>
);
};

const ThemeCustomizer = () => {
  const [ theme, accentColor, changeAccentColor ] = useContext(ThemeContext); 

  const colors = [
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
    { name: 'Purple', value: 'purple' },
    { name: 'Red', value: 'red' },
    { name: 'Yellow', value: 'yellow' }
  ];

  return(
    <div className={`p-6 rounded-lg transition-all duration-300 ${
      theme === 'light' 
      ? 'bg-white text-gray-800 shadow-md' 
      : 'bg-gray-800 text-white shadow-xl'
    }`}>
      <h2 className={`text-xl font-semibold mb-4 text-${accentColor}-600`}>
        Theme Customizer
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">
            Accent Color: 
           </h3>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => changeAccentColor(color.value)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  accentColor === color.value
                    ? 'border-gray-400 scale-110'
                    : 'border-gray-300 hover:scale-105'
                    } bg-${color.value}-500`}
                    title={color.name}
              />
            ))};
          </div>
        </div>

        <div className="text-sm opacity-75">
          <p>
            Current accent: 
            <span className="font-semibold">
              {accentColor}
            </span>
          </p>
          <p>
             Current theme: 
            <span className="font-semibold">
              {theme}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

const Demo = () => {

  return (
    <ThemeProvider>
      <UserProvider>
        <div className="">
          <div>
            <Header/>

            <div>
              <div>
                <Sidebar/>
                <ThemeCustomizer/>
              </div>

              <div>
                <UserProfile/>
              </div>
            </div>
          </div>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default Demo;
