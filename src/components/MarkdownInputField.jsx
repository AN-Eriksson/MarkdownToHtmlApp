import React from 'react';

const MarkdownInputField = ({ value, onChange }) => {
  return (
    <form className='flex-1 border'>
      <textarea
        type='text'
        className='w-full h-full bg-amber-200 resize-none'
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default MarkdownInputField;
