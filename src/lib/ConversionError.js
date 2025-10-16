export default class ConversionError extends Error {
  message;
  name;

  constructor(message = 'Conversion failed') {
    super(message);
    this.name = 'ConversionError';
  }
}
