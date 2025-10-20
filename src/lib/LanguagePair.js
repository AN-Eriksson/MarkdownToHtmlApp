/**
 * Represents a translation language pair using ISO 639-1 two-letter codes.
 *
 * @class LanguagePair
 *
 * @param {string} fromLanguage - Two-letter ISO 639 code for the source language.
 * @param {string} toLanguage - Two-letter ISO 639 code for the target language.
 *
 * @throws {TypeError} If either fromLanguage or toLanguage is not a string.
 * @throws {RangeError} If either language code is not exactly 2 characters long.
 */
export default class LanguagePair {
  #fromLanguage;
  #toLanguage;

  constructor(fromLanguage, toLanguage) {
    if (typeof fromLanguage !== 'string' || typeof toLanguage !== 'string') {
      throw new TypeError('LanguagePair can only be created from strings');
    }

    if (fromLanguage.length !== 2 || toLanguage.length !== 2) {
      throw new RangeError(
        'Language needs to be in ISO 639 (2 letter) language code'
      );
    }

    this.#fromLanguage = fromLanguage.toLowerCase();
    this.#toLanguage = toLanguage.toLowerCase();
  }

  toObject() {
    return { from: this.#fromLanguage, to: this.#toLanguage };
  }
}
