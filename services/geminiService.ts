
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

let chat: Chat | null = null;

function getChat(): Chat {
  if (!chat) {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });
  }
  return chat;
}

export const sendMessageToAI = async (message: string): Promise<string> => {
  try {
    const chatSession = getChat();
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error sending message to AI:", error);
    if (error instanceof Error) {
        return `Sorry, I encountered an error: ${error.message}. Please check the console for more details.`;
    }
    return "Sorry, I encountered an unknown error. Please try again later.";
  }
};
