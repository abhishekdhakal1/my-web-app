import React from 'react';
import { Loader2 } from 'lucide-react';

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Loader2 
            className="animate-spin text-orange-600" 
            size={64} 
            strokeWidth={3}
          />
        </div>
        <span className="font-ubuntu font-bold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400 animate-pulse">
          Abhishek Dhakal
        </span>
      </div>
    </div>
  );
}

export default Loader;