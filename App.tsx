
import React, { useState, useEffect, useCallback } from 'react';
import { ParticleType, ElementData } from './types';
import { ELEMENTS, ExtendedElementData } from './constants';
import { AtomCanvas } from './components/AtomCanvas';
import { ParticleControls } from './components/ParticleControls';
import { ElementSelector } from './components/ElementSelector';
import { getAtomicInsights } from './services/geminiService';

const App: React.FC = () => {
  const [protons, setProtons] = useState(1);
  const [neutrons, setNeutrons] = useState(0);
  const [electrons, setElectrons] = useState(1);
  const [aiInsights, setAiInsights] = useState<string>('Click an atom state to generate insights.');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [currentElement, setCurrentElement] = useState<ExtendedElementData>(ELEMENTS[1]);

  useEffect(() => {
    setCurrentElement(ELEMENTS[protons] || ELEMENTS[0]);
  }, [protons]);

  const handleAdd = (type: ParticleType) => {
    if (type === ParticleType.PROTON) setProtons(p => Math.min(p + 1, 118));
    if (type === ParticleType.NEUTRON) setNeutrons(n => Math.min(n + 1, 177));
    if (type === ParticleType.ELECTRON) setElectrons(e => Math.min(e + 1, 118));
  };

  const handleRemove = (type: ParticleType) => {
    if (type === ParticleType.PROTON) setProtons(p => Math.max(p - 1, 0));
    if (type === ParticleType.NEUTRON) setNeutrons(n => Math.max(n - 1, 0));
    if (type === ParticleType.ELECTRON) setElectrons(e => Math.max(e - 1, 0));
  };

  const handleReset = () => {
    setProtons(1);
    setNeutrons(0);
    setElectrons(1);
  };

  const handleElementSelect = (element: ExtendedElementData) => {
    setProtons(element.number);
    setElectrons(element.number); // Neutral by default
    setNeutrons(Math.round(element.mass) - element.number);
  };

  const fetchInsights = useCallback(async () => {
    setIsAiLoading(true);
    const insights = await getAtomicInsights(protons, neutrons, electrons);
    setAiInsights(insights);
    setIsAiLoading(false);
  }, [protons, neutrons, electrons]);

  useEffect(() => {
    fetchInsights();
  }, [fetchInsights]);

  return (
    <div className="relative w-screen h-screen overflow-hidden text-slate-100 selection:bg-blue-500/30">
      <AtomCanvas protons={protons} neutrons={neutrons} electrons={electrons} />

      {/* Header Info */}
      <div className="fixed top-8 left-8 z-20 pointer-events-none">
        <div className="flex items-center gap-6">
          <div 
            className="w-24 h-24 bg-slate-900/60 backdrop-blur-xl border rounded-3xl flex flex-col items-center justify-center shadow-2xl transition-colors duration-500"
            style={{ borderColor: `${currentElement.color}40` }}
          >
            <span className="text-4xl font-bold font-mono leading-none" style={{ color: currentElement.color }}>
              {currentElement.symbol}
            </span>
            <span className="text-xs font-bold text-slate-400 mt-1">{protons}</span>
          </div>
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
              {currentElement.name}
            </h1>
            <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">
              Atomic Mass: {currentElement.mass.toFixed(3)} u
            </p>
            <div className="flex gap-2 mt-2">
               <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${protons === electrons ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
                 {protons === electrons ? 'Neutral' : protons > electrons ? 'Cation' : 'Anion'}
               </span>
               <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                 Z = {protons}
               </span>
               <span 
                className="px-2 py-0.5 rounded text-[10px] font-bold uppercase border"
                style={{ backgroundColor: `${currentElement.color}20`, color: currentElement.color, borderColor: `${currentElement.color}40` }}
               >
                 {currentElement.category}
               </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Panel */}
      <div className="fixed top-8 right-8 w-80 z-20">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              AI Physics Insights
            </h3>
            <button 
              onClick={fetchInsights}
              disabled={isAiLoading}
              className="text-[9px] font-bold uppercase px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors disabled:opacity-50"
            >
              Analyze
            </button>
          </div>
          <div className="text-xs text-slate-300 leading-relaxed font-light min-h-[100px]">
            {isAiLoading ? (
              <div className="flex flex-col gap-2 mt-2">
                <div className="h-3 bg-slate-800/50 rounded animate-pulse w-full" />
                <div className="h-3 bg-slate-800/50 rounded animate-pulse w-5/6" />
                <div className="h-3 bg-slate-800/50 rounded animate-pulse w-4/6" />
              </div>
            ) : (
              <div className="prose prose-invert prose-xs">
                {aiInsights.split('\n').filter(l => l.trim()).map((line, i) => (
                  <p key={i} className="mb-1.5 opacity-90">{line.replace(/^\*|\-/, '•')}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Element Template Selector */}
      <ElementSelector 
        onSelect={handleElementSelect}
        currentNumber={protons}
      />

      {/* Controls */}
      <ParticleControls 
        protons={protons}
        neutrons={neutrons}
        electrons={electrons}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onReset={handleReset}
      />

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none border-[30px] border-white/[0.01] z-10" />
      <div className="fixed bottom-4 left-4 text-[9px] font-mono text-slate-700 uppercase tracking-widest">
        Subatomic Sandbox v1.1.0 • Known Element Library
      </div>
    </div>
  );
};

export default App;
