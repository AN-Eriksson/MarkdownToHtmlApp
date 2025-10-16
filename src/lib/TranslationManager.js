export default class TranslationManager {
  translateFn;

  constructor(translateFn) {
    this.translateFn = translateFn;
  }

  async translateText(text, langPair) {
    if (!text) {
      return '';
    }

    try {
      return await this.translateFn(text, langPair.toObject());
    } catch (error) {
      console.error('ConversionManager.translateText error:', error);
    }
  }
}
