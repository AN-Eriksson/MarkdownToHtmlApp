import React from 'react';

/**
 * FileUpload component.
 *
 * Renders a labeled file input that accepts Markdown files (.md) and invokes
 * the provided callback with the selected File.
 *
 * The visible element is a styled label that triggers a hidden file input when clicked.
 *
 *
 * @component
 * @param {Object} props - Component props.
 * @param {(file: File|undefined) => void} props.onFileUpload - Callback invoked when the user selects a file. Receives the selected File object.
 * @returns {JSX.Element} A JSX element containing the file upload control.
 */
const FileUpload = ({ onFileUpload }) => {
  return (
    <div className='flex items-center'>
      <label
        htmlFor='file-upload'
        className='inline-flex items-center justify-center px-2 py-1 w-24 border border-gray-300 rounded text-sm bg-white hover:bg-gray-50 cursor-pointer'
      >
        Upload .md
      </label>
      <input
        id='file-upload'
        type='file'
        accept='.md'
        className='hidden'
        onChange={event => onFileUpload(event.target.files[0])}
      />
    </div>
  );
};

export default FileUpload;
