import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Hadi',
    role: 'Software Engineer',
    preferences: {
      notifications: true,
      language: 'id'
    }
  });

  const updateUser = (newUserData) => {
    setUser(prev => ({ ...prev, ...newUserData }));
  };

  const updateUserPreferences = (newPreferences) => {
    setUser(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...newPreferences }
    }));
  };

  const contextValue = {
    user,
    updateUser,
    updateUserPreferences
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;