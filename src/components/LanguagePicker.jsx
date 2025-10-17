import React, { useState } from 'react';
import { FLAG_MAP, LANGUAGES } from '../lib/LanguageAndFlagConstants';
import LanguagePair from '../lib/LanguagePair';

const getFlag = code => FLAG_MAP[code];

const LanguagePicker = ({ onSelect }) => {
  const [openModal, setOpenModal] = useState(false);
  const [fromLanguage, setFromLanguage] = useState('en');
  const [toLanguage, setToLanguage] = useState('sv');

  const confirm = () => {
    onSelect(new LanguagePair(fromLanguage, toLanguage));
    setOpenModal(false);
  };

  return (
    <>
      <button
        type='button'
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center gap-2'
        onClick={() => setOpenModal(true)}
      >
        <span className='text-lg leading-none text-center'>
          {getFlag(fromLanguage)} → {getFlag(toLanguage)}
        </span>
      </button>

      {openModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/40'>
          <div className='bg-white p-4 rounded shadow-md w-80'>
            <div className='mb-3'>
              <label className='block text-sm'>From</label>
              <select
                value={fromLanguage}
                onChange={event => setFromLanguage(event.target.value)}
                className='w-full p-1 border'
              >
                {LANGUAGES.map(language => (
                  <option key={language.code} value={language.code}>
                    {getFlag(language.code)} {language.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='mb-3'>
              <label className='block text-sm'>To</label>
              <select
                value={toLanguage}
                onChange={event => setToLanguage(event.target.value)}
                className='w-full p-1 border'
              >
                {LANGUAGES.map(language => (
                  <option key={language.code} value={language.code}>
                    {getFlag(language.code)} {language.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex justify-end gap-2'>
              <button
                className='px-3 py-1 rounded'
                onClick={() => setOpenModal(false)}
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
