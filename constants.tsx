
import { ElementData } from './types';

export interface ExtendedElementData extends ElementData {
  category: string;
  color: string;
}

export const ELEMENTS: Record<number, ExtendedElementData> = {
  0: { number: 0, symbol: '?', name: 'None', mass: 0, category: 'unknown', color: '#64748b' },
  1: { number: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, category: 'nonmetal', color: '#facc15' },
  2: { number: 2, symbol: 'He', name: 'Helium', mass: 4.0026, category: 'noble', color: '#f87171' },
  3: { number: 3, symbol: 'Li', name: 'Lithium', mass: 6.94, category: 'alkali', color: '#fb923c' },
  4: { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.0122, category: 'alkaline', color: '#fbbf24' },
  5: { number: 5, symbol: 'B', name: 'Boron', mass: 10.81, category: 'metalloid', color: '#a3e635' },
  6: { number: 6, symbol: 'C', name: 'Carbon', mass: 12.011, category: 'nonmetal', color: '#facc15' },
  7: { number: 7, symbol: 'N', name: 'Nitrogen', mass: 14.007, category: 'nonmetal', color: '#facc15' },
  8: { number: 8, symbol: 'O', name: 'Oxygen', mass: 15.999, category: 'nonmetal', color: '#facc15' },
  9: { number: 9, symbol: 'F', name: 'Fluorine', mass: 18.998, category: 'halogen', color: '#2dd4bf' },
  10: { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, category: 'noble', color: '#f87171' },
  11: { number: 11, symbol: 'Na', name: 'Sodium', mass: 22.990, category: 'alkali', color: '#fb923c' },
  12: { number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.305, category: 'alkaline', color: '#fbbf24' },
  13: { number: 13, symbol: 'Al', name: 'Aluminum', mass: 26.982, category: 'post-transition', color: '#38bdf8' },
  14: { number: 14, symbol: 'Si', name: 'Silicon', mass: 28.085, category: 'metalloid', color: '#a3e635' },
  15: { number: 15, symbol: 'P', name: 'Phosphorus', mass: 30.974, category: 'nonmetal', color: '#facc15' },
  16: { number: 16, symbol: 'S', name: 'Sulfur', mass: 32.06, category: 'nonmetal', color: '#facc15' },
  17: { number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.45, category: 'halogen', color: '#2dd4bf' },
  18: { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.948, category: 'noble', color: '#f87171' },
  19: { number: 19, symbol: 'K', name: 'Potassium', mass: 39.098, category: 'alkali', color: '#fb923c' },
  20: { number: 20, symbol: 'Ca', name: 'Calcium', mass: 40.078, category: 'alkaline', color: '#fbbf24' },
  26: { number: 26, symbol: 'Fe', name: 'Iron', mass: 55.845, category: 'transition', color: '#818cf8' },
  29: { number: 29, symbol: 'Cu', name: 'Copper', mass: 63.546, category: 'transition', color: '#818cf8' },
  30: { number: 30, symbol: 'Zn', name: 'Zinc', mass: 65.38, category: 'transition', color: '#818cf8' },
  36: { number: 36, symbol: 'Kr', name: 'Krypton', mass: 83.798, category: 'noble', color: '#f87171' },
  47: { number: 47, symbol: 'Ag', name: 'Silver', mass: 107.87, category: 'transition', color: '#818cf8' },
  79: { number: 79, symbol: 'Au', name: 'Gold', mass: 196.97, category: 'transition', color: '#818cf8' },
  80: { number: 80, symbol: 'Hg', name: 'Mercury', mass: 200.59, category: 'transition', color: '#818cf8' },
  82: { number: 82, symbol: 'Pb', name: 'Lead', mass: 207.2, category: 'post-transition', color: '#38bdf8' },
  92: { number: 92, symbol: 'U', name: 'Uranium', mass: 238.03, category: 'actinide', color: '#c084fc' },
};

export const COLORS = {
  PROTON: '#ef4444',
  NEUTRON: '#94a3b8',
  ELECTRON: '#3b82f6',
  ELECTRON_SHELL: 'rgba(59, 130, 246, 0.1)',
  NUCLEUS_BG: 'rgba(255, 255, 255, 0.03)',
};

export const PARTICLE_SIZES = {
  NUCLEON: 8, // Reduced size for higher Z compatibility
  ELECTRON: 3,
};
