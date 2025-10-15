import React, { useState } from 'react';
import { FLAG_MAP, LANGUAGES } from '../assets/LanguageAndFlagConstants';

const getFlag = code => FLAG_MAP[code];

const LanguagePicker = ({ onSelect }) => {
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('sv');

  const confirm = () => {
    onSelect && onSelect({ from, to });
    setOpen(false);
  };

  return (
    <>
      <button
        type='button'
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center gap-2'
        onClick={() => setOpen(true)}
      >
        <span className='text-lg leading-none text-center'>
          {getFlag(from)} → {getFlag(to)}
        </span>
      </button>

      {open && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/40'>
          <div className='bg-white p-4 rounded shadow-md w-80'>
            <div className='mb-3'>
              <label className='block text-sm'>From</label>
              <select
                value={from}
                onChange={e => setFrom(e.target.value)}
                className='w-full p-1 border'
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>
                    {getFlag(l.code)} {l.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='mb-3'>
              <label className='block text-sm'>To</label>
              <select
                value={to}
                onChange={e => setTo(e.target.value)}
                className='w-full p-1 border'
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>
                    {getFlag(l.code)} {l.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex justify-end gap-2'>
              <button
                className='px-3 py-1 rounded'
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className='px-3 py-1 bg-blue-600 text-white rounded'
                onClick={confirm}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguagePicker;
