import ConversionError from "./ConversionError";

/**
 * Manages conversion of markdown-like input into HTML using a provided markup converter.
 *
 * The manager delegates the actual conversion work to the injected `markupConverter`.
 *
 * @class ConversionManager
 * @param {MarkupConverter} markupConverter - Converter instance with a `convert(string): string` method.
 */
export default class ConversionManager {
  markupConverter;

  constructor(markupConverter) {
    this.markupConverter = markupConverter;
  }

  convertMarkdown(inputDocument) {
    try {
      return inputDocument
        ? this.markupConverter.convert(inputDocument.toString())
        : '';
    } catch {
      throw new ConversionError('Failed to convert text')
      
    }
  }
}
