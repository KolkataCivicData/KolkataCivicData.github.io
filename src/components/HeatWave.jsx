import React, { useState } from 'react';
import { Sun } from 'lucide-react';
// Direct import of data
import parliamentData from '../data/heatwave/parliament.json'; 

const HeatWave = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-gray-900">
            How Is Indian Parliament Responding to the Heatwave?
        </h1>
        <p className="text-gray-600 mt-2 max-w-3xl">
          An interactive archive of parliamentary questions...
        </p>
      </div>
      
      {/* ParliamentDashboard is hidden for now because 
          the component file is missing from /src/components 
      */}
      <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800">
          <strong>Status:</strong> Parliament data ({parliamentData.length} records) is successfully loaded. 
          The interactive dashboard will appear once the component files are uploaded.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm border-dashed">
        <Sun className="w-10 h-10 text-orange-200 mb-3" />
        <h3 className="text-base font-medium text-gray-500">
            Visual Data Analysis Coming Soon
        </h3>
      </div>
    </div>
  );
};

export default HeatWave;
