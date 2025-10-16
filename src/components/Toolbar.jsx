import React from 'react';
import LanguagePicker from './LanguagePicker';
import FileUpload from './FileUpload';

const Toolbar = ({ mode, onModeChange, onLanguageSelect, onFile }) => {
  const onFileUpload = async file => {
    const fileTextContent = await file.text();
    onFile(fileTextContent);
  };

  return (
    <div className='flex flex-col gap-2 mb-4 mt-4'>
      <FileUpload onFileUpload={onFileUpload} />

      <h1>Choose mode:</h1>
      <div className='flex flex-col items-center gap-4'>
        <label className='inline-flex items-center gap-2'>
          <input
            type='radio'
            name='mode'
            value='translate'
            checked={mode === 'translate'}
            onChange={e => onModeChange(e.target.value)}
            className='form-radio'
          />
          <span>Translate language</span>
        </label>

        <label className='inline-flex items-center gap-2'>
          <input
            type='radio'
            name='mode'
            value='html'
            checked={mode === 'html'}
            onChange={e => onModeChange(e.target.value)}
            className='form-radio'
          />
          <span>Markdown → HTML</span>
        </label>
      </div>

      {mode === 'translate' && <LanguagePicker onSelect={onLanguageSelect} />}
    </div>
  );
};

export default Toolbar;
