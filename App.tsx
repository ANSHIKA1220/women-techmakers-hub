import React from 'react';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-white min-h-screen text-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[90vh] flex flex-col bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200">
        <header className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
                    </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-800">FemmeForward AI</h1>
            </div>
            <p className="text-sm text-purple-600">Your Women in Tech Resource Hub</p>
        </header>
        <ChatInterface />
      </div>
    </div>
  );
};

export default App;