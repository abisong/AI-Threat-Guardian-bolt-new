import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const data = [
    { name: 'Network', threats: 120, mitigated: 115 },
    { name: 'Malware', threats: 80, mitigated: 78 },
    { name: 'Phishing', threats: 40, mitigated: 38 },
    { name: 'Anomaly', threats: 30, mitigated: 28 },
    { name: 'Zero-Day', threats: 5, mitigated: 4 },
    { name: 'IoT', threats: 25, mitigated: 23 },
    { name: 'Cloud', threats: 50, mitigated: 48 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Threat Analytics</h2>
      <div className="mb-4">
        <label htmlFor="timeRange" className="mr-2">Time Range:</label>
        <select
          id="timeRange"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="border rounded p-1"
        >
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="threats" fill="#8884d8" name="Threats Detected" />
          <Bar dataKey="mitigated" fill="#82ca9d" name="Threats Mitigated" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;