import React from 'react';
import { AppProviders } from './providers/AppProviders';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { UserProfile } from './components/profile/UserProfile';
import { ThemeCustomizer } from './components/theme/ThemeCustomizer';


const App = () => {
  return (
    <AppProviders>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <Header />
          
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6">
              <Sidebar />
              <ThemeCustomizer />
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <UserProfile />
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </AppProviders>
  );
};

export default App;