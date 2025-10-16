export default class TranslationError extends Error {
  message;
  name;

  constructor(message = 'Translation failed') {
    super(message);
    this.name = 'TranslationError';
  }
}
