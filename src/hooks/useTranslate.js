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

  const clear = () => setTranslatedDocument('');

  return { loading, translatedDocument, translate, clear };
}
