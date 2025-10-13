import React from 'react';

const TranslationOutput = ({ translatedText }) => {
  return (
    <div className="flex-1 border rounded-xl overflow-hidden bg-amber-100 p-2">
      <pre className='whitespace-pre-wrap font-mono text-sm flex-1 bg-amber-100'>
        {translatedText || ''}
      </pre>

    </div>
  );
};

export default TranslationOutput;
