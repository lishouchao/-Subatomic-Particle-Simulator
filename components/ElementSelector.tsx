
import React from 'react';
import { ELEMENTS, ExtendedElementData } from '../constants';

interface ElementSelectorProps {
  onSelect: (element: ExtendedElementData) => void;
  currentNumber: number;
}

export const ElementSelector: React.FC<ElementSelectorProps> = ({ onSelect, currentNumber }) => {
  const elementList = Object.values(ELEMENTS).filter(e => e.number > 0);

  return (
    <div className="fixed left-8 top-44 bottom-32 w-64 z-20 flex flex-col gap-4">
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl flex flex-col h-full shadow-2xl overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex justify-between items-center">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Element Templates
          </h3>
          <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-500 font-mono">
            {elementList.length} Known
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {elementList.sort((a, b) => a.number - b.number).map((el) => (
            <button
              key={el.number}
              onClick={() => onSelect(el)}
              className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all group ${
                currentNumber === el.number 
                  ? 'bg-blue-500/20 border border-blue-500/30' 
                  : 'hover:bg-slate-800/50 border border-transparent hover:border-slate-700'
              }`}
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold font-mono text-sm shadow-inner"
                style={{ backgroundColor: `${el.color}20`, color: el.color, border: `1px solid ${el.color}40` }}
              >
                {el.symbol}
              </div>
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-xs font-semibold text-slate-200 truncate w-full text-left">
                  {el.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  Z = {el.number}
                </span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="p-3 bg-slate-950/40 border-t border-slate-800">
          <p className="text-[9px] text-slate-500 leading-tight italic">
            Select an element to instantly reconfigure the subatomic structure.
          </p>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}</style>
    </div>
  );
};
