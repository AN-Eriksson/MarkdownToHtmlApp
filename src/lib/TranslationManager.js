import TranslationError from "./TranslationError";

/**
 * Manages translation operations by delegating to a provided translation function.
 *
 * The instance stores a translateFn which is used by translateText to perform
 * the translation.
 *
 * @class TranslationManager
 * @param {function(string, Object): Promise<string>} translateFn - Function that performs translation. Receives (text, languagePairObject) and returns a Promise resolving to the translated text.
 */
export default class TranslationManager {
  #translateFn;

  constructor(translateFn) {
    this.#translateFn = translateFn;
  }

  async translateText(text, languagePair) {
    if (!text) {
      return '';
    }

    try {
      return await this.#translateFn(text, languagePair.toObject());
    } catch {
      throw new TranslationError('Failed to translate text')
    }
  }
}
