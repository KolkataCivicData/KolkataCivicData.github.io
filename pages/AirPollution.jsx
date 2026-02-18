import React, { useState, useEffect } from 'react';
import OverallChart from '../components/Charts/OverallChart';
import MonthGrid from '../components/Charts/MonthGrid'; // (Your MonthCard grid)
import { Calendar, Info } from 'lucide-react';

// Dynamic Import Strategy
// This allows you to switch years easily
const dataMap = {
  '2024': require('../data/aqi/2024.json'),
  // '2025': require('../data/aqi/2025.json') // Uncomment when file exists
};

const AirPollution = () => {
  const [activeYear, setActiveYear] = useState('2024');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Load data based on year selection
    if (dataMap[activeYear]) {
      setData(dataMap[activeYear]);
    } else {
      setData([]);
    }
  }, [activeYear]);

  return (
    <div className="space-y-12">
      {/* Header with Year Selector */}
      <div className="flex justify-between items-end mb-6">
         <h1 className="text-3xl font-serif font-bold">Air Pollution Analysis</h1>
         <div className="flex bg-gray-100 p-1 rounded-lg">
            {['2024', '2025'].map(year => (
              <button 
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-1.5 text-sm ${activeYear === year ? 'bg-white shadow-sm' : ''}`}
              >
                {year}
              </button>
            ))}
         </div>
      </div>

      {data.length > 0 ? (
        <>
          <OverallChart data={data} />
          <MonthGrid data={data} />
        </>
      ) : (
        <div className="p-10 text-center bg-white border rounded-xl">
           <Info className="w-10 h-10 mx-auto text-gray-300 mb-2"/>
           <p>Data for {activeYear} is not yet available.</p>
        </div>
      )}
    </div>
  );
};

export default AirPollution;
