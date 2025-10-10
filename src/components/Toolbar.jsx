import React from 'react'

const Toolbar = ({ onSave, onLoad, onCopy }) => {
    return (
        <div className='flex gap-2 mb-4'>
            <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700
             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                onClick={onSave}
            >
                Save
            </button>
            <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700
             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                onClick={onLoad}
            >
                Load
            </button>
            <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700
             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                onClick={onCopy}
            >
                Copy HTML
            </button>
        </div>
    )
}

export default Toolbar