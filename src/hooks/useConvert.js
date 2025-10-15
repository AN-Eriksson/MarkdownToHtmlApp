import { useState } from 'react';

export default function useConvert(conversionManager) {
  const [htmlOutput, setHtmlOutput] = useState('');

  const convert = text => {
    setHtmlOutput(text ? conversionManager.convertMarkdown(text) : '');
  };

  const clear = () => setHtmlOutput('');

  return { htmlOutput, convert, clear };
}
