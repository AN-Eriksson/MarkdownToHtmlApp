import { useState } from 'react';

export default function useTranslate(translationManager) {
  const [loading, setLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState('');

  const translate = async (text, langPair) => {
    if (!text) {
      setTranslatedText('');
      return '';
    }
    setLoading(true);
    try {
      const res = await translationManager.translateText(text, langPair);
      setTranslatedText(res);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const clear = () => setTranslatedText('');

  return { loading, translatedText, translate, clear };
}
