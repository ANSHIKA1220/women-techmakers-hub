import React from 'react';

const SuggestionChips = ({ chips, onChipClick }) => {
    return (
        <div className="p-4 flex flex-wrap gap-2 justify-center">
            {chips.map((chip, index) => (
                <button
                    key={index}
                    onClick={() => onChipClick(chip)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-purple-200 transition-colors duration-200"
                >
                    {chip}
                </button>
            ))}
        </div>
    );
};

export default SuggestionChips;