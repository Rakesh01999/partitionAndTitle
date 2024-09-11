import React, { useState } from 'react';

const AlphabetTileInteraction = () => {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    setOutputString(prevString => {
      const newString = prevString + letter;
      return processConsecutiveLetters(newString);
    });
  };

  const processConsecutiveLetters = (str) => {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        if (count >= 3) {
          result += '_'.repeat(count);
        } else {
          result += str[i].repeat(count);
        }
        count = 1;
      }
    }
    return result;
  };

  return (
    <div className="p-2 sm:p-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 sm:gap-2 mb-4">
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => (
          <button
            key={letter}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded text-xs sm:text-sm md:text-base transition-colors duration-200"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div 
        id="outputString" 
        className="mt-4 p-2 border border-gray-300 rounded min-h-[50px] text-sm sm:text-base break-all"
      >
        {outputString}
      </div>
    </div>
  );
};

export default AlphabetTileInteraction;
