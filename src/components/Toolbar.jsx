import React from 'react';
import LanguagePicker from './LanguagePicker';
import FileUpload from './FileUpload';

/**
 * Toolbar component.
 *
 * Renders a file upload control, a pair of mode-selection radio buttons, and
 * (when in translate mode) a language picker.
 *
 * @param {Object} props - Component props.
 * @param {'translate'|'html'} props.mode - Current mode; 'translate' displays the LanguagePicker, 'html' selects Markdown → HTML mode.
 * @param {(mode: 'translate'|'html') => void} props.onModeChange - Callback invoked when the mode radio selection changes. Receives the newly selected mode.
 * @param {(language: string) => void} props.onLanguageSelect - Callback invoked when a language is chosen from the LanguagePicker.
 * @param {(fileText: string) => void} props.onFile - Callback invoked with the text content of an uploaded file. The component reads the File using the File.text() API and passes the resulting string to this handler.
 *
 * @returns {JSX.Element} The toolbar UI.
 */
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
