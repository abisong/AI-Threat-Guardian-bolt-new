import React, { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface Alert {
  id: number;
  type: 'critical' | 'warning' | 'info';
  message: string;
  timestamp: string;
}

const Alerts: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    { id: 1, type: 'critical', message: 'Potential data breach detected in cloud storage', timestamp: '2024-03-15 14:30:00' },
    { id: 2, type: 'warning', message: 'Unusual login activity from IP 192.168.1.100', timestamp: '2024-03-15 13:45:00' },
    { id: 3, type: 'info', message: 'System update completed successfully', timestamp: '2024-03-15 12:00:00' },
    { id: 4, type: 'warning', message: 'Multiple failed login attempts for user admin', timestamp: '2024-03-15 11:30:00' },
    { id: 5, type: 'critical', message: 'DDoS attack detected and mitigated', timestamp: '2024-03-15 10:15:00' },
  ]);

  const handleDismiss = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertCircle className="text-red-500" />;
      case 'warning':
        return <AlertCircle className="text-yellow-500" />;
      case 'info':
        return <CheckCircle className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Security Alerts</h2>
      {alerts.length === 0 ? (
        <p>No active alerts at this time.</p>
      ) : (
        <ul className="space-y-4">
          {alerts.map(alert => (
            <li key={alert.id} className={`flex items-start p-4 rounded-md ${
              alert.type === 'critical' ? 'bg-red-100' :
              alert.type === 'warning' ? 'bg-yellow-100' : 'bg-green-100'
            }`}>
              <div className="mr-3 mt-1">{getAlertIcon(alert.type)}</div>
              <div className="flex-grow">
                <p className="font-semibold">{alert.message}</p>
                <p className="text-sm text-gray-600">{alert.timestamp}</p>
              </div>
              <button onClick={() => handleDismiss(alert.id)} className="text-gray-500 hover:text-gray-700">
                <XCircle size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Alerts;