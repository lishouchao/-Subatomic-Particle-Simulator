
export const translations = {
  en: {
    protons: "Protons",
    neutrons: "Neutrons",
    electrons: "Electrons",
    reset: "Reset Atom",
    atomicMass: "Atomic Mass",
    neutral: "Neutral",
    cation: "Cation",
    anion: "Anion",
    aiInsights: "AI Physics Insights",
    analyze: "Analyze",
    templates: "Element Templates",
    known: "Known",
    templateHint: "Select an element to instantly reconfigure the subatomic structure.",
    loading: "Analyzing subatomic structure...",
    placeholder: "Click analyze to generate insights.",
    version: "Subatomic Sandbox • Physical Constants Simulation",
    langToggle: "中 / EN"
  },
  zh: {
    protons: "质子",
    neutrons: "中子",
    electrons: "电子",
    reset: "重置原子",
    atomicMass: "原子量",
    neutral: "中性",
    cation: "阳离子",
    anion: "阴离子",
    aiInsights: "AI 物理洞察",
    analyze: "智能分析",
    templates: "元素模板",
    known: "已知",
    templateHint: "选择一个元素以快速切换其亚原子结构。",
    loading: "正在分析亚原子结构...",
    placeholder: "点击智能分析以获取详细信息。",
    version: "亚原子沙盒 • 物理常数模拟",
    langToggle: "EN / 中"
  }
};

export type Language = keyof typeof translations;
