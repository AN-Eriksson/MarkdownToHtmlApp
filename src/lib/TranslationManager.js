import TranslationError from "./TranslationError";

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
    } catch {
      throw new TranslationError('Failed to translate text')
    }
  }
}
