export default class LanguagePair {
  from;
  to;

  constructor(from, to) {
    if (typeof from !== 'string' || typeof to !== 'string') {
      throw new TypeError('LanguagePair can only be created from strings');
    }

    if (from.length !== 2 || to.length !== 2) {
      throw new RangeError(
        'Language needs to be in ISO 639 (2 letter) language code'
      );
    }

    this.from = from.toLowerCase();
    this.to = to.toLowerCase();
  }

  toObject() {
    return { from: this.from, to: this.to };
  }
}
