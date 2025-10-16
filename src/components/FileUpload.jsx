import React from 'react';

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
