import React from 'react';
import { Shield } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['Dashboard', 'Analytics', 'Settings', 'Alerts', 'About'];

  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield size={32} />
          <h1 className="text-2xl font-bold">AI Threat Guardian</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {tabs.map((tab) => (
              <li key={tab}>
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === tab.toLowerCase()
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-200 hover:bg-indigo-500'
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;