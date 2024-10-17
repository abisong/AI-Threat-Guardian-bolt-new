import React from 'react';
import { LucideIcon } from 'lucide-react';
import ThreatDetectionModule from './ThreatDetectionModule';

interface Feature {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface DashboardProps {
  features: Feature[];
  activeFeature: string;
  setActiveFeature: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ features, activeFeature, setActiveFeature }) => {
  if (activeFeature) {
    return <ThreatDetectionModule moduleId={activeFeature} onBack={() => setActiveFeature('')} />;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Security Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            onClick={() => setActiveFeature(feature.id)}
          >
            <feature.icon size={48} className="text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
            <p className="text-gray-600 text-center">
              AI-powered {feature.name.toLowerCase()} for enhanced security.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;