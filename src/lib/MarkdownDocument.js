/**
 * Represents a Markdown document containing raw markdown text.
 *
 * @class MarkdownDocument
 *
 * @param {string} textContent - The markdown text to store in this document.
 * @throws {TypeError} If `textContent` is not a string.
 */
export default class MarkdownDocument {
  textContent;

  constructor(textContent) {
    if (typeof textContent !== 'string') {
      throw new TypeError('MarkdownDocument text content must be a string');
    }

    this.textContent = textContent;
  }

  toString() {
    return this.textContent;
  }
}
