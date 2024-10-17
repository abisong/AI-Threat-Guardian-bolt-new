import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">About AI Threat Guardian</h2>
      <p className="mb-4">
        AI Threat Guardian is an advanced cybersecurity platform that leverages artificial intelligence to detect, prevent, and mitigate various types of cyber threats. Our system provides real-time protection against network intrusions, malware, phishing attempts, and more.
      </p>
      <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Real-time network intrusion detection</li>
        <li>Advanced malware detection</li>
        <li>Phishing detection system</li>
        <li>Anomaly detection in network traffic</li>
        <li>AI-based threat intelligence</li>
        <li>Zero-day threat prediction</li>
        <li>AI-driven honeypots</li>
        <li>IoT device security monitoring</li>
        <li>Cloud security anomaly detection</li>
        <li>AI-enhanced firewall management</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">How to Use AI Threat Guardian:</h3>
      <ol className="list-decimal pl-6 mb-4">
        <li>Navigate to the Dashboard to view all available security modules.</li>
        <li>Click on a specific module to access its detailed view and controls.</li>
        <li>Use the "Run Detection" button within each module to initiate AI-powered threat analysis.</li>
        <li>Review the results and take necessary actions based on the AI's recommendations.</li>
        <li>Check the Analytics tab for an overview of threat statistics and trends.</li>
        <li>Use the Settings tab to configure system preferences and notification settings.</li>
        <li>Monitor the Alerts tab for real-time security notifications and updates.</li>
      </ol>
      <p>
        For more detailed information or support, please contact our technical team or refer to the user documentation.
      </p>
    </div>
  );
};

export default About;