
import { ElementData } from './types';

export interface ExtendedElementData extends ElementData {
  categoryEn: string;
  categoryZh: string;
  nameEn: string;
  nameZh: string;
  color: string;
}

export const ELEMENTS: Record<number, ExtendedElementData> = {
  0: { number: 0, symbol: '?', name: 'None', nameEn: 'None', nameZh: '无', mass: 0, categoryEn: 'unknown', categoryZh: '未知', color: '#64748b' },
  1: { number: 1, symbol: 'H', name: 'Hydrogen', nameEn: 'Hydrogen', nameZh: '氢', mass: 1.008, categoryEn: 'nonmetal', categoryZh: '非金属', color: '#facc15' },
  2: { number: 2, symbol: 'He', name: 'Helium', nameEn: 'Helium', nameZh: '氦', mass: 4.0026, categoryEn: 'noble', categoryZh: '稀有气体', color: '#f87171' },
  3: { number: 3, symbol: 'Li', name: 'Lithium', nameEn: 'Lithium', nameZh: '锂', mass: 6.94, categoryEn: 'alkali', categoryZh: '碱金属', color: '#fb923c' },
  4: { number: 4, symbol: 'Be', name: 'Beryllium', nameEn: 'Beryllium', nameZh: '铍', mass: 9.0122, categoryEn: 'alkaline', categoryZh: '碱土金属', color: '#fbbf24' },
  5: { number: 5, symbol: 'B', name: 'Boron', nameEn: 'Boron', nameZh: '硼', mass: 10.81, categoryEn: 'metalloid', categoryZh: '类金属', color: '#a3e635' },
  6: { number: 6, symbol: 'C', name: 'Carbon', nameEn: 'Carbon', nameZh: '碳', mass: 12.011, categoryEn: 'nonmetal', categoryZh: '非金属', color: '#facc15' },
  7: { number: 7, symbol: 'N', name: 'Nitrogen', nameEn: 'Nitrogen', nameZh: '氮', mass: 14.007, categoryEn: 'nonmetal', categoryZh: '非金属', color: '#facc15' },
  8: { number: 8, symbol: 'O', name: 'Oxygen', nameEn: 'Oxygen', nameZh: '氧', mass: 15.999, categoryEn: 'nonmetal', categoryZh: '非金属', color: '#facc15' },
  9: { number: 9, symbol: 'F', name: 'Fluorine', nameEn: 'Fluorine', nameZh: '氟', mass: 18.998, categoryEn: 'halogen', categoryZh: '卤素', color: '#2dd4bf' },
  10: { number: 10, symbol: 'Ne', name: 'Neon', nameEn: 'Neon', nameZh: '氖', mass: 20.180, categoryEn: 'noble', categoryZh: '稀有气体', color: '#f87171' },
  11: { number: 11, symbol: 'Na', name: 'Sodium', nameEn: 'Sodium', nameZh: '钠', mass: 22.990, categoryEn: 'alkali', categoryZh: '碱金属', color: '#fb923c' },
  12: { number: 12, symbol: 'Mg', name: 'Magnesium', nameEn: 'Magnesium', nameZh: '镁', mass: 24.305, categoryEn: 'alkaline', categoryZh: '碱土金属', color: '#fbbf24' },
  13: { number: 13, symbol: 'Al', name: 'Aluminum', nameEn: 'Aluminum', nameZh: '铝', mass: 26.982, categoryEn: 'post-transition', categoryZh: '后过渡金属', color: '#38bdf8' },
  14: { number: 14, symbol: 'Si', name: 'Silicon', nameEn: 'Silicon', nameZh: '硅', mass: 28.085, categoryEn: 'metalloid', categoryZh: '类金属', color: '#a3e635' },
  15: { number: 15, symbol: 'P', name: 'Phosphorus', nameEn: 'Phosphorus', nameZh: '磷', mass: 30.974, categoryEn: 'nonmetal', categoryZh: '非金属', color: '#facc15' },
  16: { number: 16, symbol: 'S', name: 'Sulfur', nameEn: 'Sulfur', nameZh: '硫', mass: 32.06, categoryEn: 'nonmetal', categoryZh: '非金属', color: '#facc15' },
  17: { number: 17, symbol: 'Cl', name: 'Chlorine', nameEn: 'Chlorine', nameZh: '氯', mass: 35.45, categoryEn: 'halogen', categoryZh: '卤素', color: '#2dd4bf' },
  18: { number: 18, symbol: 'Ar', name: 'Argon', nameEn: 'Argon', nameZh: '氩', mass: 39.948, categoryEn: 'noble', categoryZh: '稀有气体', color: '#f87171' },
  19: { number: 19, symbol: 'K', name: 'Potassium', nameEn: 'Potassium', nameZh: '钾', mass: 39.098, categoryEn: 'alkali', categoryZh: '碱金属', color: '#fb923c' },
  20: { number: 20, symbol: 'Ca', name: 'Calcium', nameEn: 'Calcium', nameZh: '钙', mass: 40.078, categoryEn: 'alkaline', categoryZh: '碱土金属', color: '#fbbf24' },
  26: { number: 26, symbol: 'Fe', name: 'Iron', nameEn: 'Iron', nameZh: '铁', mass: 55.845, categoryEn: 'transition', categoryZh: '过渡金属', color: '#818cf8' },
  29: { number: 29, symbol: 'Cu', name: 'Copper', nameEn: 'Copper', nameZh: '铜', mass: 63.546, categoryEn: 'transition', categoryZh: '过渡金属', color: '#818cf8' },
  30: { number: 30, symbol: 'Zn', name: 'Zinc', nameEn: 'Zinc', nameZh: '锌', mass: 65.38, categoryEn: 'transition', categoryZh: '过渡金属', color: '#818cf8' },
  36: { number: 36, symbol: 'Kr', name: 'Krypton', nameEn: 'Krypton', nameZh: '氪', mass: 83.798, categoryEn: 'noble', categoryZh: '稀有气体', color: '#f87171' },
  47: { number: 47, symbol: 'Ag', name: 'Silver', nameEn: 'Silver', nameZh: '银', mass: 107.87, categoryEn: 'transition', categoryZh: '过渡金属', color: '#818cf8' },
  79: { number: 79, symbol: 'Au', name: 'Gold', nameEn: 'Gold', nameZh: '金', mass: 196.97, categoryEn: 'transition', categoryZh: '过渡金属', color: '#818cf8' },
  80: { number: 80, symbol: 'Hg', name: 'Mercury', nameEn: 'Mercury', nameZh: '汞', mass: 200.59, categoryEn: 'transition', categoryZh: '过渡金属', color: '#818cf8' },
  82: { number: 82, symbol: 'Pb', name: 'Lead', nameEn: 'Lead', nameZh: '铅', mass: 207.2, categoryEn: 'post-transition', categoryZh: '后过渡金属', color: '#38bdf8' },
  92: { number: 92, symbol: 'U', name: 'Uranium', nameEn: 'Uranium', nameZh: '铀', mass: 238.03, categoryEn: 'actinide', categoryZh: '锕系元素', color: '#c084fc' },
};

export const COLORS = {
  PROTON: '#ef4444',
  NEUTRON: '#94a3b8',
  ELECTRON: '#3b82f6',
  ELECTRON_SHELL: 'rgba(59, 130, 246, 0.1)',
  NUCLEUS_BG: 'rgba(255, 255, 255, 0.03)',
};

export const PARTICLE_SIZES = {
  NUCLEON: 8,
  ELECTRON: 3,
};
