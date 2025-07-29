import { useTheme, getContainerClasses } from '../../hooks/useTheme';
import { useUser, useNotificationToggle } from '../../hooks/useUser';

export const UserProfile = () => {
  const { theme, accentColor } = useTheme();
  const { user, updateUser } = useUser();
  const { isNotificationsEnabled, toggleNotifications } = useNotificationToggle();
  
  const handleNameChange = (e) => {
    updateUser({ name: e.target.value });
  };
  
  const handleRoleChange = (e) => {
    updateUser({ role: e.target.value });
  };
  
  return (
    <div className={getContainerClasses(theme)}>
      <h2 className={`text-xl font-semibold mb-4 text-${accentColor}-600`}>
        User Profile
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={handleNameChange}
            className={`w-full p-2 rounded border transition-colors ${
              theme === 'light'
                ? 'border-gray-300 bg-white text-gray-800'
                : 'border-gray-600 bg-gray-700 text-white'
            }`}
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Role:</label>
          <input
            type="text"
            value={user.role}
            onChange={handleRoleChange}
            className={`w-full p-2 rounded border transition-colors ${
              theme === 'light'
                ? 'border-gray-300 bg-white text-gray-800'
                : 'border-gray-600 bg-gray-700 text-white'
            }`}
            placeholder="Enter your role"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Language:</label>
          <p className={`p-2 rounded ${
            theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
          }`}>
            {user.preferences.language === 'id' ? 'Indonesian' : 'English'}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="notifications"
            checked={isNotificationsEnabled}
            onChange={toggleNotifications}
            className="w-4 h-4"
          />
          <label htmlFor="notifications" className="text-sm">
            Enable notifications
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;