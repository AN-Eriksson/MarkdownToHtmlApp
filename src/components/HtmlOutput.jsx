import React from 'react';

const HtmlOutput = ({ htmlOutput }) => {
  return (
    <div className="flex-1 border rounded-xl overflow-hidden bg-amber-100 p-2">
      <pre className="whitespace-pre-wrap font-mono text-sm p-4">{htmlOutput || ''}</pre>
    </div>
  );
};

export default HtmlOutput;
