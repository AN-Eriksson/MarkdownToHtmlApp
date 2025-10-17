import React from 'react';

/**
 * TranslationOutput
 *
 * Displays a translated document inside a monospace <pre> block and conditionally
 * renders a "copy" button when `translatedDocument` is present.
 *
 *
 * @param {Object} props - Component props.
 * @param {string|Object|null|undefined} props.translatedDocument - The translated content to display. 
 * @param {() => void} props.onCopy - Callback invoked when the copy button is clicked.
 * @param {string} props.copyStatus - Label text shown inside the copy button (e.g. "Copy", "Copied").
 * @returns {JSX.Element} The rendered TranslationOutput component.
 */
const TranslationOutput = ({ translatedDocument, onCopy, copyStatus }) => {
  return (
    <div className='flex-1 border rounded-xl overflow-hidden bg-amber-100 p-2'>
      <pre className='whitespace-pre-wrap font-mono text-sm flex-1 bg-amber-100'>
        {translatedDocument?.toString() || ''}
      </pre>

      {translatedDocument && (
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

export default TranslationOutput;
