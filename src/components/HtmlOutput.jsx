import React from 'react';

/**
 * HtmlOutput component
 *
 * Renders a container showing an HTML document and a copy button when content is present.
 *
 * @param {Object} props - Component props.
 * @param {string|Object|null|undefined} props.htmlDocument - The HTML content to display. The value is rendered using its toString() method; when falsy an empty string is shown and the copy button is hidden.
 * @param {Function} props.onCopy - Callback invoked when the copy button is clicked.
 * @param {string} props.copyStatus - Label shown on the copy button.
 *
 * @returns {JSX.Element} The rendered HtmlOutput component.
 */
const HtmlOutput = ({ htmlDocument, onCopy, copyStatus }) => {
  return (
    <div className='flex-1 border rounded-xl overflow-hidden bg-amber-100 p-2'>
      <pre className='whitespace-pre-wrap font-mono text-sm p-4'>
        {htmlDocument?.toString() || ''}
      </pre>

      {htmlDocument && (
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
