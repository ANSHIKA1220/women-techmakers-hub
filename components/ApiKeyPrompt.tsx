import React, { useState } from 'react';

const ApiKeyPrompt = ({ onSubmit }) => {
    const [apiKey, setApiKey] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (apiKey.trim()) {
            onSubmit(apiKey.trim());
        }
    };

    return (
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 text-center">
            <div className="mx-auto mb-4 p-3 bg-purple-500 rounded-full w-fit">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h4a6 6 0 016 6z" />
                </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Enter Your API Key</h1>
            <p className="text-gray-600 mb-6">
                To use FemmeForward AI, please enter your Google AI API key. Your key is stored only in your browser's session and is never sent to our servers.
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your Google AI API key"
                    className="w-full p-3 mb-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-300 text-gray-800 placeholder-gray-500 text-center"
                />
                <button
                    type="submit"
                    className="w-full p-3 bg-purple-500 rounded-lg text-white font-semibold hover:bg-purple-600 disabled:bg-gray-300 transition duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                >
                    Start Chatting
                </button>
            </form>
             <p className="text-xs text-gray-500 mt-4">
                Don't have a key? Get one from{' '}
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                    Google AI Studio
                </a>.
            </p>
        </div>
    );
};

export default ApiKeyPrompt;