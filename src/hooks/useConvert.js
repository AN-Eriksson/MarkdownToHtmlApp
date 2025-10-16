import { useState } from 'react';
import ProcessedDocument from '../lib/ProcessedDocument';

export default function useConvert(conversionManager) {
  const [htmlDocument, setHtmlDocument] = useState('');

  const convert = inputDocument => {
    const text = inputDocument.toString();
    const convertedDocumentObject = conversionManager.convertMarkdown(text);
    setHtmlDocument(new ProcessedDocument(convertedDocumentObject));
  };

  const clear = () => setHtmlDocument('');

  return { htmlDocument, convert, clear };
}
