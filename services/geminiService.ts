import { GoogleGenAI } from "@google/genai";

// Always initialize the client with process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAtomicInsights = async (protons: number, neutrons: number, electrons: number) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a subatomic physics expert. Analyze an atom with ${protons} protons, ${neutrons} neutrons, and ${electrons} electrons. 
      Briefly explain:
      1. What isotope or ion this is.
      2. Its stability (using physics principles like the valley of stability or electron shell filling).
      3. A cool fact about this configuration.
      Keep it professional, scientific, but accessible. Limit to 3 short bullet points.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Directly access the .text property from the response
    return response.text || "No insights available for this configuration.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Unable to fetch AI insights at this time. Please check your configuration.";
  }
};