import React from 'react';
import { CDP, CDPs } from '../types';

interface CDPSelectorProps {
  selectedCDP: CDP | null;
  onSelectCDP: (cdp: CDP) => void;
}

const CDPSelector: React.FC<CDPSelectorProps> = ({ selectedCDP, onSelectCDP }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {Object.entries(CDPs).map(([key, cdp]) => (
        <button
          key={key}
          onClick={() => onSelectCDP(key as CDP)}
          className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCDP === key
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <img src={cdp.logo} alt={cdp.name} className="w-5 h-5 mr-2 rounded-full" />
          {cdp.name}
        </button>
      ))}
    </div>
  );
};

export default CDPSelector;