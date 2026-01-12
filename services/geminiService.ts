
import { GoogleGenAI } from "@google/genai";
import { Language } from "../i18n";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAtomicInsights = async (protons: number, neutrons: number, electrons: number, lang: Language) => {
  try {
    const langPrompt = lang === 'zh' ? 'Please provide the analysis in Chinese.' : 'Please provide the analysis in English.';
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a subatomic physics expert. Analyze an atom with ${protons} protons, ${neutrons} neutrons, and ${electrons} electrons. 
      Briefly explain:
      1. What isotope or ion this is.
      2. Its stability (using physics principles like the valley of stability or electron shell filling).
      3. A cool fact about this configuration.
      ${langPrompt}
      Keep it professional, scientific, but accessible. Limit to 3 short bullet points.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "No insights available.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'zh' 
      ? "目前无法获取分析结果，请检查网络配置。" 
      : "Unable to fetch AI insights at this time. Please check your configuration.";
  }
};
