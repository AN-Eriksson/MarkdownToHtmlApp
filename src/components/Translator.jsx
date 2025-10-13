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

    return <span>{text}</span>
}

export default Translator