import React from 'react';

const TranslateButton = ({ onClick, loading }) => {
    return (
        <button
            type="button"
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={onClick}
            disabled={loading}
        >
            {loading ? 'Translating…' : 'Translate'}
        </button>
    );
};

export default TranslateButton;