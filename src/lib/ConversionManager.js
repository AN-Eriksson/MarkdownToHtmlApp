import ConversionError from "./ConversionError";

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
