/**
 * Represents a processed document containing plain text content.
 *
 * @class ProcessedDocument
 *
 * @param {string} textContent - The document's text content.
 * @throws {TypeError} If {@code textContent} is not a string.
 */
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
