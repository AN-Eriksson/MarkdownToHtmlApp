export default class TranslationManager {
  translateFn;

  constructor(translateFn) {
    this.translateFn = translateFn;
  }

  async translateText(text, langPair) {
    if (!text) {
      return '';
    }

    const options = this.#normalizeLangPair(langPair);
    try {
      return await this.translateFn(text, options);
    } catch (error) {
      console.error('ConversionManager.translateText error:', error);
    }
  }

  #normalizeLangPair(langPair) {
    if (typeof langPair === 'string') {
      return { to: langPair };
    } else if (langPair && typeof langPair === 'object') {
      const options = {};
      if (langPair.to) options.to = langPair.to;
      if (langPair.from) options.from = langPair.from;
      return options;
    }
    return {};
  }
}
