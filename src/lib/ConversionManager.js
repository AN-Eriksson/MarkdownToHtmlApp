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

  async translateText(text, langPair) {
    if (!text) return '';

    let options;
    if (typeof langPair === 'string') {
      options = { to: langPair };
    } else if (langPair && typeof langPair === 'object') {
      options = {};
      if (langPair.to) options.to = langPair.to;
      if (langPair.from) options.from = langPair.from;
    }
    try {
      return await this.translateFn(text, options);
    } catch (error) {
      console.error('ConversionManager.translateText error:', error);
    }
  }
}
