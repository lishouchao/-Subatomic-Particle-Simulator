
import React from 'react';
import { ParticleType } from '../types';

interface ControlButtonProps {
  label: string;
  type: ParticleType;
  count: number;
  onAdd: (type: ParticleType) => void;
  onRemove: (type: ParticleType) => void;
  colorClass: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({ label, type, count, onAdd, onRemove, colorClass }) => (
  <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex flex-col items-center gap-3 w-32 shadow-xl">
    <span className={`text-xs font-bold uppercase tracking-widest ${colorClass}`}>{label}</span>
    <span className="text-3xl font-mono text-white">{count}</span>
    <div className="flex gap-2 w-full">
      <button 
        onClick={() => onRemove(type)}
        className="flex-1 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center justify-center font-bold text-xl"
        disabled={count <= 0}
      >
        -
      </button>
      <button 
        onClick={() => onAdd(type)}
        className="flex-1 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center justify-center font-bold text-xl"
      >
        +
      </button>
    </div>
  </div>
);

interface ParticleControlsProps {
  protons: number;
  neutrons: number;
  electrons: number;
  onAdd: (type: ParticleType) => void;
  onRemove: (type: ParticleType) => void;
  onReset: () => void;
}

export const ParticleControls: React.FC<ParticleControlsProps> = ({ protons, neutrons, electrons, onAdd, onRemove, onReset }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 items-end z-20">
      <ControlButton 
        label="Protons" 
        type={ParticleType.PROTON} 
        count={protons} 
        onAdd={onAdd} 
        onRemove={onRemove}
        colorClass="text-red-400"
      />
      <ControlButton 
        label="Neutrons" 
        type={ParticleType.NEUTRON} 
        count={neutrons} 
        onAdd={onAdd} 
        onRemove={onRemove}
        colorClass="text-slate-400"
      />
      <ControlButton 
        label="Electrons" 
        type={ParticleType.ELECTRON} 
        count={electrons} 
        onAdd={onAdd} 
        onRemove={onRemove}
        colorClass="text-blue-400"
      />
      <button 
        onClick={onReset}
        className="bg-red-900/20 hover:bg-red-900/40 text-red-400 border border-red-900/50 p-4 rounded-2xl transition-all font-bold uppercase text-xs tracking-widest h-[150px] w-16 flex items-center justify-center [writing-mode:vertical-lr] rotate-180"
      >
        Reset Atom
      </button>
    </div>
  );
};
