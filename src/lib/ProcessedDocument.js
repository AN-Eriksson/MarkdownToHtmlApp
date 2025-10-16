export default class ProcessedDocument {
  textContent;

  constructor(textContent) {
    if (typeof textContent !== 'string') {
      throw new TypeError('ProcessedDocument text content must be a string');
    }

    this.textContent = textContent;
  }

  toString() {
    return this.textContent;
  }
}
