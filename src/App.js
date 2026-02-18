import React, { useState } from 'react';
import AirPollution from './pages/AirPollution';
import HeatWave from './pages/HeatWave';

function App() {
  const [currentPage, setCurrentPage] = useState('pollution');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Navigation Bar */}
      <nav className="bg-white border-b p-4 flex gap-6 shadow-sm">
        <button 
          onClick={() => setCurrentPage('pollution')}
          className={`font-bold ${currentPage === 'pollution' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          Air Pollution
        </button>
        <button 
          onClick={() => setCurrentPage('heatwave')}
          className={`font-bold ${currentPage === 'heatwave' ? 'text-orange-600' : 'text-gray-500'}`}
        >
          Heatwave
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto p-8">
        {currentPage === 'pollution' ? <AirPollution /> : <HeatWave />}
      </main>
    </div>
  );
}

export default App;
