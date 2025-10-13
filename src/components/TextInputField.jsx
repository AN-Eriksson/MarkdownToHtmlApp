import React from 'react';

const TextInputField = ({ value, onChange }) => {
  return (
    <form className='flex-1'>
      <textarea
        className='w-full h-full bg-amber-100 resize-none border rounded-xl p-2'
        value={value}
        onChange={onChange}
        placeholder='Write your input here..'
      />
    </form>
  );
};

export default TextInputField;
