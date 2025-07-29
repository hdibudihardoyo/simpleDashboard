import { User, Settings, Bell, Globe } from 'lucide-react';

export const menuItems = [
  { icon: User, label: 'Profile', id: 'profile' },
  { icon: Settings, label: 'Settings', id: 'settings' },
  { icon: Bell, label: 'Notifications', id: 'notifications' },
  { icon: Globe, label: 'Language', id: 'language' }
];

export const accentColors = [
  { 
    name: 'Blue', 
    value: 'blue',
    classes: {
      text: 'text-blue-600',
      bg: 'bg-blue-500',
      hover: 'hover:bg-blue-600'
    }
  },
  { 
    name: 'Green', 
    value: 'green',
    classes: {
      text: 'text-green-600',
      bg: 'bg-green-500',
      hover: 'hover:bg-green-600'
    }
  },
  { 
    name: 'Purple', 
    value: 'purple',
    classes: {
      text: 'text-purple-600',
      bg: 'bg-purple-500',
      hover: 'hover:bg-purple-600'
    }
  },
  { 
    name: 'Red', 
    value: 'red',
    classes: {
      text: 'text-red-600',
      bg: 'bg-red-500',
      hover: 'hover:bg-red-600'
    }
  },
  { 
    name: 'Yellow', 
    value: 'yellow',
    classes: {
      text: 'text-yellow-600',
      bg: 'bg-yellow-500',
      hover: 'hover:bg-yellow-600'
    }
  }
];

// Helper function untuk mendapatkan accent color classes
export const getAccentColorClasses = (accentColor) => {
  const colorConfig = accentColors.find(color => color.value === accentColor);
  return colorConfig ? colorConfig.classes : accentColors[0].classes; // fallback ke blue
};