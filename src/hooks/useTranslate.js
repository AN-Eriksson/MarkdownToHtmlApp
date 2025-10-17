/**
 * useTranslate hook
 *
 * - Translates a MarkdownDocument into a ProcessedDocument and keeps the result in hook state.
 * - Exposes: { loading, translatedDocument, translate(inputDocument, languagePair), clear() }.
 *
 * @param {Object} translationManager - object with a translateText(text, languagePair) method
 * @returns {Object} { loading: boolean, translatedDocument: ProcessedDocument, translate: Function, clear: Function }
 */
import { useState } from 'react';
import ProcessedDocument from '../lib/ProcessedDocument';

export default function useTranslate(translationManager) {
  const [loading, setLoading] = useState(false);
  const [translatedDocument, setTranslatedDocument] = useState(null);

  const translate = async (inputDocument, languagePair) => {
    if (!inputDocument) {
      setTranslatedDocument(null);
      return null;
    }

    const text = inputDocument.toString();

    setLoading(true);
    try {
      const translatedText = await translationManager.translateText(
        text,
        languagePair
      );
      const translatedDocumentObject = new ProcessedDocument(translatedText);
      setTranslatedDocument(translatedDocumentObject);
      return translatedDocumentObject;
    } finally {
      setLoading(false);
    }
  };

  const clear = () => setTranslatedDocument(null);

  return { loading, translatedDocument, translate, clear };
}
