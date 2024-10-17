import React, { useState } from 'react';
import { Shield, AlertTriangle, Zap, Network, Cloud, Lock, Cpu, Wifi, Server, RefreshCw } from 'lucide-react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Alerts from './components/Alerts';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeFeature, setActiveFeature] = useState('');

  const features = [
    { id: 'network', name: 'Network Intrusion', icon: Network },
    { id: 'malware', name: 'Malware Detection', icon: Shield },
    { id: 'phishing', name: 'Phishing Detection', icon: AlertTriangle },
    { id: 'anomaly', name: 'Anomaly Detection', icon: Zap },
    { id: 'intelligence', name: 'Threat Intelligence', icon: Cloud },
    { id: 'zeroday', name: 'Zero-Day Prediction', icon: Lock },
    { id: 'honeypot', name: 'AI Honeypots', icon: Cpu },
    { id: 'iot', name: 'IoT Security', icon: Wifi },
    { id: 'cloud', name: 'Cloud Security', icon: Server },
    { id: 'firewall', name: 'Firewall Management', icon: RefreshCw },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <Dashboard 
            features={features} 
            activeFeature={activeFeature} 
            setActiveFeature={setActiveFeature} 
          />
        )}
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'settings' && <Settings />}
        {activeTab === 'alerts' && <Alerts />}
        {activeTab === 'about' && <About />}
      </main>
      <Footer />
    </div>
  );
};

export default App;