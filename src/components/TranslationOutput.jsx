import React from 'react'

const TranslationOutput = ({ translatedText }) => {
    return (
        <div className='flex-1 border bg-amber-100 p-4'>
            <pre className='whitespace-pre-wrap font-mono text-sm'>
                {translatedText || ''}
            </pre>
        </div>
    )
}

export default TranslationOutput