import React from 'react';

/**
 * TranslateButton
 *
 * Renders a button that triggers an action (convert or translate). The label
 * changes based on the `loading` state and the `mode`. When `loading` is true
 * the button is disabled and shows a progress label.
 *
 * @param {Object} props - Component props.
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick - Click handler passed to the button.
 * @param {boolean} props.loading - When true, disables the button and shows a "Converting.." or "Translating.." label.
 * @param {string} props.mode - Mode that controls the label; expected value 'html' to use conversion labels, otherwise translation labels.
 * @returns {JSX.Element} The rendered button element.
 */
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
