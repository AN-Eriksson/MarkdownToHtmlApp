import React from 'react'

const LanguagePicker = () => {
    return (
        <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700
             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            onClick={'test'}
        >
            Pick languages
        </button>
    )
}

export default LanguagePicker