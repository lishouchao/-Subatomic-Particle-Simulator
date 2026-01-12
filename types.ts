
export enum ParticleType {
  PROTON = 'PROTON',
  NEUTRON = 'NEUTRON',
  ELECTRON = 'ELECTRON'
}

export interface Particle {
  id: string;
  type: ParticleType;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetRadius?: number;
  angle?: number;
}

export interface ElementData {
  number: number;
  symbol: string;
  name: string;
  mass: number;
}

export interface SimulationState {
  protons: number;
  neutrons: number;
  electrons: number;
}
