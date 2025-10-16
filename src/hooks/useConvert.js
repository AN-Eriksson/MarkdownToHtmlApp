import { useState } from 'react';
import ProcessedDocument from '../lib/ProcessedDocument';

export default function useConvert(conversionManager) {
  const [htmlDocument, setHtmlDocument] = useState(null);

  const convert = inputDocument => {
    if (!inputDocument) {
      setHtmlDocument(null);
      return null;
    }

    const text = inputDocument.toString();

    const convertedDocumentObject = conversionManager.convertMarkdown(text);
    setHtmlDocument(new ProcessedDocument(convertedDocumentObject));
  };

  const clear = () => setHtmlDocument('');

  return { htmlDocument, convert, clear };
}
