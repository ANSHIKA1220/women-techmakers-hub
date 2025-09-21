import React, { useState, useRef, useEffect, useCallback } from 'react';
import { WELCOME_MESSAGE, SUGGESTION_CHIPS } from '../constants';
import { getBotResponse } from '../services/geminiService';
import ChatMessage from './ChatMessage';
import LoadingSpinner from './LoadingSpinner';
import SuggestionChips from './SuggestionChips';
// FIX: Import Role enum to fix type errors.
import { Role } from '../types';

const ChatInterface = () => {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = useCallback(async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    // FIX: Use Role enum for message role to match type definition.
    const userMessage = { role: Role.USER, text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);
    setUserInput('');

    try {
      const aiResponseText = await getBotResponse(messageText);
      // FIX: Use Role enum for message role to match type definition.
      const aiMessage = { role: Role.MODEL, text: aiResponseText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
      setError(errorMessage);
      // FIX: Use Role enum for message role to match type definition.
      const errorResponseMessage = { role: Role.MODEL, text: `Sorry, something went wrong: ${errorMessage}` };
      setMessages(prev => [...prev, errorResponseMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(userInput);
  };
  
  const handleSuggestionClick = (suggestion) => {
      setUserInput(suggestion);
      handleSubmit(suggestion);
  };

  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden">
      <div ref={chatContainerRef} className="flex-1 p-6 space-y-6 overflow-y-auto scroll-smooth">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        {isLoading && (
          <div className="flex justify-start items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
                </svg>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg max-w-lg">
              <LoadingSpinner />
            </div>
          </div>
        )}
      </div>
       {messages.length <= 1 && <SuggestionChips chips={SUGGESTION_CHIPS} onChipClick={handleSuggestionClick} />}
      <div className="p-4 border-t border-gray-200 bg-white/50">
        {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
        <form onSubmit={handleFormSubmit} className="flex items-center space-x-3">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask about events, scholarships, mentorship..."
            className="flex-1 p-3 bg-gray-100 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-300 text-gray-800 placeholder-gray-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="p-3 bg-purple-500 rounded-full text-white hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
