export default class LanguagePair {
  fromLanguage;
  toLanguage;

  constructor(fromLanguage, toLanguage) {
    if (typeof fromLanguage !== 'string' || typeof toLanguage !== 'string') {
      throw new TypeError('LanguagePair can only be created from strings');
    }

    if (fromLanguage.length !== 2 || toLanguage.length !== 2) {
      throw new RangeError(
        'Language needs to be in ISO 639 (2 letter) language code'
      );
    }

    this.fromLanguage = fromLanguage.toLowerCase();
    this.toLanguage = toLanguage.toLowerCase();
  }

  toObject() {
    return { from: this.fromLanguage, to: this.toLanguage };
  }
}
