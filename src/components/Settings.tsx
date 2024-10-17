import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    autoUpdate: true,
    dataRetention: '30',
    sensitivityLevel: 'medium',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the settings to a backend
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">System Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
              className="mr-2"
            />
            Enable Email Notifications
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="autoUpdate"
              checked={settings.autoUpdate}
              onChange={handleChange}
              className="mr-2"
            />
            Enable Automatic Updates
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Data Retention Period (days):</label>
          <select
            name="dataRetention"
            value={settings.dataRetention}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="7">7 days</option>
            <option value="30">30 days</option>
            <option value="90">90 days</option>
            <option value="365">1 year</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">AI Sensitivity Level:</label>
          <select
            name="sensitivityLevel"
            value={settings.sensitivityLevel}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;