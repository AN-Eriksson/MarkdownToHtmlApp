import translate from "translate";

import React, { useState } from 'react'

const Translator = ({ stringToTranslate, lang }) => {
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)

    const handleTranslate = async () => {
        if (!stringToTranslate) {
            setText('')
            return
        }
        setLoading(true)
        const translated = await translate(stringToTranslate, lang)
        setText(translated)
        setLoading(false)
    }

    return (
        <div className='flex-1 border bg-amber-100 p-4'>
            <div className='mb-2'>
                <button
                    type='button'
                    className='px-3 py-1 bg-blue-600 text-white rounded'
                    onClick={handleTranslate}
                    disabled={loading}
                >
                    {loading ? 'Translating…' : 'Translate'}
                </button>
            </div>

            <pre className='whitespace-pre-wrap font-mono text-sm'>
                {text}
            </pre>
        </div>
    )
}

export default Translator