import React from 'react';
import LanguagePicker from './LanguagePicker';

const Toolbar = ({
  mode,
  onToggleMode,
  onLanguageSelect,
}) => {
  return (
    <div className='flex gap-2 mb-4 mt-4'>
      <button
        type='button'
        className='px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700
             focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300'
        onClick={onToggleMode}
      >
        {mode === 'html'
          ? 'Switch to language translation'
          : 'Switch to Markdown -> html conversion'}
      </button>

      {mode === 'translate' && <LanguagePicker onSelect={onLanguageSelect} />}
    </div>
  );
};

export default Toolbar;
