import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AirPollution from './pages/AirPollution';
import HeatWave from './pages/HeatWave';

function App() {
  const [activeTab, setActiveTab] = useState('air-pollution');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Navigation */}
      <nav className="p-4 bg-white border-b flex gap-4">
        <button onClick={() => setActiveTab('air-pollution')} className={activeTab === 'air-pollution' ? "font-bold" : ""}>Air Pollution</button>
        <button onClick={() => setActiveTab('heat-wave')} className={activeTab === 'heat-wave' ? "font-bold" : ""}>Heat Wave</button>
      </nav>

      <main className="p-8">
        {activeTab === 'air-pollution' ? <AirPollution /> : <HeatWave />}
      </main>
    </div>
  );
}

export default App;
