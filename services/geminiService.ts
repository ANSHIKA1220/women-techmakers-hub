import { GoogleGenAI } from "@google/genai";
import { KNOWLEDGE_BASE } from '../constants';

// FIX: Per @google/genai guidelines, initialize the client directly using process.env.API_KEY.
// The API key must not be managed through the UI.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const knowledgeBasePrompt = KNOWLEDGE_BASE.map(
    entry => `- For questions about **${entry.keywords.join(', ')}**:\n  - ${entry.response}`
).join('\n\n');


const systemInstruction = `You are Athena, a friendly and helpful AI assistant for FemmeForward. Your purpose is to provide resources and support for women in technology. You should be encouraging and provide accurate, relevant information.

You have access to some internal knowledge. When a user asks about one of the following topics, use the provided information as a starting point for your answer. You can expand upon it with your own knowledge.

${knowledgeBasePrompt}

Always be supportive and positive in your tone. If you don't know the answer, say so politely and suggest other ways the user can find information. Do not mention that you are an AI or a language model unless directly asked. Your name is Athena.
`;

export const getBotResponse = async (message: string): Promise<string> => {
    // FIX: The AI client is now initialized at the module level, so the initialization check is no longer needed.
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
            config: {
                systemInstruction: systemInstruction,
            },
        });
        
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            if (error.message.includes('API_KEY_INVALID')) {
                 // FIX: Removed suggestion to get a new key from Google AI Studio to comply with guidelines.
                 return "It seems your API key is invalid. Please check it and try again.";
            }
            return `I'm sorry, I encountered an error while trying to respond: ${error.message}`;
        }
        return "I'm sorry, I encountered an unexpected error while trying to respond.";
    }
};
