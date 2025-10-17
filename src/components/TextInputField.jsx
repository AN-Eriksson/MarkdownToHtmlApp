import React from 'react';

/**
 * TextInputField - text input component.
 *
 * Renders a textarea and delegates value updates to the provided
 * onChange handler.
 *
 * @param {Object} props - Component props.
 * @param {string} props.value - Current textarea value.
 * @param {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} props.onChange - Handler invoked when the textarea value changes.
 * @returns {JSX.Element} The rendered textarea wrapped in a form.
 */
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
