export default class ConversionManager {
  markupConverter;

  constructor(markupConverter) {
    this.markupConverter = markupConverter;
  }

  convertMarkdown(inputDocument) {
    return inputDocument
      ? this.markupConverter.convert(inputDocument.toString())
      : '';
  }
}
