import React from 'react';

const MarkdownInputField = ({ value, onChange }) => {
  return (
    <div className='bg-gray-300'>
      <form>
        <input type='text'
          className='bg-amber-200'
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default MarkdownInputField;
