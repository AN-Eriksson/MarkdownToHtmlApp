export default class ConversionManager {
  markupConverter;

  constructor(markupConverter) {
    this.markupConverter = markupConverter;
  }

  convertMarkdown(text) {
    return text ? this.markupConverter.convert(text) : '';
  }
}