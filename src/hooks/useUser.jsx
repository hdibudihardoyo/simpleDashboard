import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

// Custom hook untuk menggunakan User Context
export const useUser = () => {
  const context = useContext(UserContext);
  
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  
  return context;
};

// Helper function untuk toggle notifications
export const useNotificationToggle = () => {
  const { user, updateUserPreferences } = useUser();
  
  const toggleNotifications = () => {
    updateUserPreferences({ 
      notifications: !user.preferences.notifications 
    });
  };
  
  return { 
    isNotificationsEnabled: user.preferences.notifications, 
    toggleNotifications 
  };
};

export default useUser;