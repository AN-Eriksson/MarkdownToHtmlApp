import React from 'react'

const Toolbar = ({ onCopy, copyStatus, mode, onToggleMode }) => {
    return (
        <div className='flex gap-2 mb-4'>
            <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700
             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                onClick={onToggleMode}
            >
                {mode === 'html' ? 'Switch to Translate' : 'Switch to HTML'}
            </button>


            <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700
             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                onClick={onCopy}
            >
                {copyStatus}
            </button>
        </div>
    )
}

export default Toolbar