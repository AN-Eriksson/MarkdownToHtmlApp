export default class ConversionManager {
  constructor(markupConverter, translateFn) {
    this.markupConverter = markupConverter;
    this.translateFn = translateFn;
  }

  convertMarkdown(text) {
    return text ? this.markupConverter.convert(text) : '';
  }

  async translateText(text, lang = 'es') {
    if (!text) return '';
    const result = await this.translateFn(text, lang);
    return result;
  }
}
