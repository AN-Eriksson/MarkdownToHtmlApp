import React from 'react'

const TranslationOutput = ({ translatedText }) => {
    return (
        <pre className='whitespace-pre-wrap font-mono text-sm flex-1 border bg-amber-100'>
            {translatedText || ''}
        </pre>
    )
}

export default TranslationOutput