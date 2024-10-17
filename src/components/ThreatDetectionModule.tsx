import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

interface ThreatDetectionModuleProps {
  moduleId: string;
  onBack: () => void;
}

const ThreatDetectionModule: React.FC<ThreatDetectionModuleProps> = ({ moduleId, onBack }) => {
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState<any>(null);

  const moduleTitles = {
    network: 'Real-Time Network Intrusion Detection',
    malware: 'Advanced Malware Detection',
    phishing: 'Phishing Detection System',
    anomaly: 'Anomaly Detection in Network Traffic',
    intelligence: 'AI-Based Threat Intelligence Platform',
    zeroday: 'Zero-Day Threat Prediction',
    honeypot: 'AI-Driven Honeypots',
    iot: 'IoT Device Security Monitoring',
    cloud: 'Cloud Security Anomaly Detection',
    firewall: 'AI-Enhanced Firewall Management',
  };

  useEffect(() => {
    setStatus('idle');
    setResult(null);
  }, [moduleId]);

  const runDetection = () => {
    setStatus('running');
    // Simulate AI processing
    setTimeout(() => {
      const simulatedResults = {
        network: { detected: 3, severity: 'Medium', details: 'Unusual traffic patterns detected on ports 8080, 443, and 22' },
        malware: { detected: 1, severity: 'High', details: 'New variant of ransomware identified in email attachment' },
        phishing: { detected: 5, severity: 'Low', details: 'Suspicious URLs found in recent emails' },
        anomaly: { detected: 2, severity: 'Medium', details: 'Unexpected data transfer volumes from two workstations' },
        intelligence: { threats: 8, emerging: 3, details: 'New botnet activity detected in Asia-Pacific region' },
        zeroday: { vulnerabilities: 1, severity: 'Critical', details: 'Potential zero-day in popular CMS software' },
        honeypot: { attacks: 12, types: 3, details: 'Brute force attempts and SQL injection attacks logged' },
        iot: { compromised: 2, at_risk: 5, details: 'Two smart cameras showing signs of compromise' },
        cloud: { anomalies: 4, severity: 'Medium', details: 'Unusual access patterns in S3 buckets' },
        firewall: { rules_updated: 7, blocked_ips: 23, details: 'Firewall rules optimized based on recent threat data' },
      };
      setStatus('complete');
      setResult(simulatedResults[moduleId as keyof typeof simulatedResults]);
    }, 2000);
  };

  return (
    <div className="fade-in">
      <button onClick={onBack} className="mb-4 flex items-center text-indigo-600 hover:text-indigo-800">
        <ArrowLeft className="mr-2" size={20} />
        Back to Dashboard
      </button>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{moduleTitles[moduleId as keyof typeof moduleTitles]}</h2>
      <div className="bg-white shadow-md rounded-lg p-8">
        <p className="text-gray-600 mb-6">
          This module uses advanced AI algorithms to {getModuleDescription(moduleId)}
        </p>
        <button
          onClick={runDetection}
          disabled={status === 'running'}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
        >
          {status === 'running' ? 'Processing...' : 'Run Detection'}
        </button>
        {status === 'running' && (
          <div className="mt-6 text-blue-600 flex items-center animate-pulse">
            <AlertCircle className="mr-2" />
            AI analysis in progress...
          </div>
        )}
        {status === 'complete' && result && (
          <div className="mt-6">
            <div className="text-green-600 mb-4 flex items-center">
              <CheckCircle className="mr-2" />
              Analysis complete
            </div>
            <ResultDisplay result={result} />
          </div>
        )}
      </div>
    </div>
  );
};

const ResultDisplay: React.FC<{ result: any }> = ({ result }) => (
  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
    <h3 className="font-semibold text-lg mb-4 text-gray-800">Detection Results:</h3>
    <ul className="space-y-2">
      {Object.entries(result).map(([key, value]) => (
        <li key={key} className="flex items-start">
          <span className="font-medium text-gray-700 mr-2">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
          <span className="text-gray-600">{value as string}</span>
        </li>
      ))}
    </ul>
  </div>
);

const getModuleDescription = (moduleId: string) => {
  const descriptions = {
    network: 'monitor network traffic and identify potential intrusions in real-time.',
    malware: 'employ deep learning to detect and classify new malware variants.',
    phishing: 'analyze emails and URLs for phishing attempts.',
    anomaly: 'spot unusual patterns in network traffic that may indicate threats.',
    intelligence: 'aggregate and analyze global threat data to predict potential attacks.',
    zeroday: 'identify vulnerabilities before they are exploited.',
    honeypot: 'deploy intelligent honeypots that adapt to attacker tactics.',
    iot: 'monitor IoT devices for abnormal behavior indicating a security breach.',
    cloud: 'secure cloud environments by detecting unusual activities.',
    firewall: 'automate the adaptation of firewall rules using reinforcement learning.',
  };
  return descriptions[moduleId as keyof typeof descriptions] || 'perform advanced threat detection and prevention.';
};

export default ThreatDetectionModule;