import React from 'react';

const HtmlOutput = ({ htmlOutput, onCopy, copyStatus }) => {
  return (
    <div className='flex-1 border rounded-xl overflow-hidden bg-amber-100 p-2'>
      <pre className='whitespace-pre-wrap font-mono text-sm p-4'>
        {htmlOutput || ''}
      </pre>

      {htmlOutput && (
        <button
          type='button'
          className='mt-4 px-4 py-2 w-34 bg-gray-600 text-white rounded hover:bg-gray-700
             focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300'
          onClick={onCopy}
        >
          {copyStatus}
        </button>
      )}
    </div>
  );
};

export default HtmlOutput;
