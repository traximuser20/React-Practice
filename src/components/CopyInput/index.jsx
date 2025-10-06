import React from 'react';
import PopUpContent from '../PopUpContent';

const CopyInput = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [copied, setCopied] = React.useState(false);

  return (
    <div className="p-4 border border-gray-300 rounded flex items-center gap-2">
      <input
        className="border border-gray-400 p-2 w-lg rounded-lg mr-2"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          navigator.clipboard.writeText(inputValue);
          setCopied(true);
          setTimeout(() => setCopied(false), 4000);
        }}
      >
        Copy
      </button>
      <PopUpContent copied={copied} />
    </div>
  );
};

export default CopyInput;
