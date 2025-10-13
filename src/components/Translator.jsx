import translate from "translate";

import React, { useEffect, useState } from 'react'

const Translator = ({ stringToTranslate, lang }) => {
    const [text, setText] = useState('')

    useEffect(() => {
        if (!stringToTranslate) {
            setText('')
            return
        };

        (async () => {
            const translatedText = await translate(stringToTranslate, lang)
            setText(translatedText)
        })()
    }, [stringToTranslate, lang])

    return (
        <pre className='flex-1 border whitespace-pre-wrap font-mono text-sm bg-amber-100'>
            {text}
        </pre>
    )
}

export default Translator