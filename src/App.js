import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom'; // Keeping Router in case you use it later
import AirPollution from './pages/AirPollution';
import HeatWave from './pages/HeatWave';

function App() {
  const [activeTab, setActiveTab] = useState('air-pollution');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="p-4 bg-white border-b flex gap-4">
        <button 
          onClick={() => setActiveTab('air-pollution')} 
          style={{ 
            fontWeight: activeTab === 'air-pollution' ? 'bold' : 'normal', 
            cursor: 'pointer',
            padding: '8px 16px' 
          }}
        >
          Air Pollution
        </button>
        <button 
          onClick={() => setActiveTab('heat-wave')} 
          style={{ 
            fontWeight: activeTab === 'heat-wave' ? 'bold' : 'normal', 
            cursor: 'pointer',
            padding: '8px 16px' 
          }}
        >
          Heat Wave
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="p-8">
        {activeTab === 'air-pollution' ? <AirPollution /> : <HeatWave />}
      </main>
    </div>
  );
}

export default App;
