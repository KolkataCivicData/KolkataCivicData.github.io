import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AirPollution from './pages/AirPollution';
import HeatWave from './pages/HeatWave';

function App() {
  const [activeTab, setActiveTab] = useState('air-pollution');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="p-4 bg-white border-b flex gap-4">
        <button 
          onClick={() => setActiveTab('air-pollution')} 
          style={{ fontWeight: activeTab === 'air-pollution' ? 'bold' : 'normal' }}
        >
          Air Pollution
        </button>
        <button 
          onClick={() => setActiveTab('heat-wave')} 
          style={{ fontWeight: activeTab === 'heat-wave' ? 'bold' : 'normal' }}
        >
          Heat Wave
        </button>
      </nav>

      <main className="p-8">
        {activeTab === 'air-pollution' ? <AirPollution /> : <HeatWave />}
      </main>
    </div>
  );
}

export default App;
