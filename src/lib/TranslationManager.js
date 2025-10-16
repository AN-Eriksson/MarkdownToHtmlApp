export default class TranslationManager {
  translateFn;

  constructor(translateFn) {
    this.translateFn = translateFn;
  }

  async translateText(text, languagePair) {
    if (!text) {
      return '';
    }

    try {
      return await this.translateFn(text, languagePair.toObject());
    } catch (error) {
      console.error('ConversionManager.translateText error:', error);
    }
  }
}
