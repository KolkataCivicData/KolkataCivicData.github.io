import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

// Fixed paths to match your current folder structure
const dataMap = {
  '2024': require('../data/2024.json'), 
};

const AirPollution = () => {
  const [activeYear, setActiveYear] = useState('2024');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataMap[activeYear]) {
      setData(dataMap[activeYear]);
    } else {
      setData([]);
    }
  }, [activeYear]);

  return (
    <div className="space-y-12">
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
        <div className="p-10 text-center bg-white border rounded-xl">
           <h2 className="text-xl font-bold mb-4">Data Loaded Successfully!</h2>
           <p className="text-gray-600">We have {data.length} records for {activeYear}.</p>
           <p className="mt-4 text-sm text-red-500 font-mono">Note: Charts (OverallChart & MonthGrid) are temporarily hidden because the component files are missing.</p>
           
           {/* Simple Data Preview so you can see it's working */}
           <div className="mt-6 text-left overflow-auto max-h-60 bg-gray-50 p-4 rounded">
              <pre className="text-xs">{JSON.stringify(data.slice(0, 2), null, 2)}</pre>
           </div>
        </div>
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
