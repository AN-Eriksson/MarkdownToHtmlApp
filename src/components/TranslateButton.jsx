import React from 'react';

const TranslateButton = ({ onClick, loading, mode }) => {
  const label = loading
    ? mode === 'html'
      ? 'Converting..'
      : 'Translating..'
    : mode === 'html'
      ? 'Convert'
      : 'Translate';

  return (
    <button
      type='button'
      className='px-3 py-1 bg-blue-600 text-white rounded'
      onClick={onClick}
      disabled={loading}
    >
      {label}
    </button>
  );
};

export default TranslateButton;
