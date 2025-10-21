/**
 * useConvert hook
 *
 * - Converts a MarkdownDocument into a ProcessedDocument and holds the result in hook state.
 * - Exposes: { htmlDocument, convert(input), clear() }.
 *
 * @param {Object} conversionManager - object with a convertMarkdown(text) method
 * @returns {Object} { htmlDocument: ProcessedDocument, convert: Function, clear: Function }
 */
import { useState } from 'react';
import ProcessedDocument from '../lib/ProcessedDocument';

export default function useConvert(conversionManager) {
  const [htmlDocument, setHtmlDocument] = useState(null);

  const convert = inputDocument => {
    if (!inputDocument) {
      setHtmlDocument(null);
    }

    const text = inputDocument.toString();

    const convertedDocumentObject = conversionManager.convertMarkdown(text);
    setHtmlDocument(new ProcessedDocument(convertedDocumentObject));
  };

  const clear = () => setHtmlDocument(null);

  return { htmlDocument, convert, clear };
}
