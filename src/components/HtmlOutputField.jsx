import React from 'react';

const HtmlOutputField = ({ htmlOutput }) => {
  return (
    <pre className='flex-1 border whitespace-pre-wrap font-mono text-sm bg-amber-100'>
      {htmlOutput}
    </pre>
  );
};

export default HtmlOutputField;
