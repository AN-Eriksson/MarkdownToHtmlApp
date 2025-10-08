import React from 'react'

const HtmlOutputField = ({ htmlOutput }) => {
    return (
        <div className='bg-green-400 p-4'>
            <pre className='whitespace-pre-wrap font-mono text-sm'>
                {htmlOutput}
            </pre>
        </div>
    )
}

export default HtmlOutputField