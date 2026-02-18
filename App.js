import React, { useState } from 'react';
import Layout from './components/Layout'; // Move your Navbar/Footer here
import AirPollution from './pages/AirPollution';
import HeatWave from './pages/HeatWave';

function App() {
  const [activeTab, setActiveTab] = useState('air-pollution');

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        {activeTab === 'air-pollution' ? <AirPollution /> : <HeatWave />}
      </main>
    </Layout>
  );
}

export default App;
