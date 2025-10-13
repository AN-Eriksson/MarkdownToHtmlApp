export default class ConversionManager {
  markupConverter;
  translateFn;

  constructor(markupConverter, translateFn) {
    this.markupConverter = markupConverter;
    this.translateFn = translateFn;
  }

  convertMarkdown(text) {
    return text ? this.markupConverter.convert(text) : '';
  }

  async translateText(text, lang = 'sv') {
    if (!text) return '';

    const result = await this.translateFn(text, lang);

    return result;
  }
}
