import React, { useState } from 'react';

const LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'sv', name: 'Swedish' },
    { code: 'es', name: 'Spanish' },
    { code: 'de', name: 'German' },
    { code: 'fr', name: 'French' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'zh', name: 'Chinese (Simplified)' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'nl', name: 'Dutch' },
    { code: 'pl', name: 'Polish' },
];

const FLAG_MAP = {
    en: '🇬🇧',
    sv: '🇸🇪',
    es: '🇪🇸',
    de: '🇩🇪',
    fr: '🇫🇷',
    it: '🇮🇹',
    pt: '🇵🇹',
    ru: '🇷🇺',
    zh: '🇨🇳',
    ja: '🇯🇵',
    ko: '🇰🇷',
    nl: '🇳🇱',
    pl: '🇵🇱',
};

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
                className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2'
                onClick={() => setOpen(true)}
            >
                <span className='text-lg leading-none'>
                    {getFlag(from)} → {getFlag(to)}
                </span>
                <span className='sr-only'>Pick languages</span>
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
