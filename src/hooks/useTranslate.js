import { useState } from 'react';

export default function useTranslate(translationManager) {
  const [loading, setLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState('');

  const translate = async (inputDocument, languagePair) => {
    if (!inputDocument) {
      setTranslatedText('');
      return '';
    }

    const text = inputDocument.toString()

    setLoading(true);
    try {
      const translatedText = await translationManager.translateText(text, languagePair);
      setTranslatedText(translatedText);
      return translatedText;
    } finally {
      setLoading(false);
    }
  };

  const clear = () => setTranslatedText('');

  return { loading, translatedText, translate, clear };
}
