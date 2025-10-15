export default class CopyManager {
  setStatus = () => {}; // This is the callback function the class needs to use to update react state. Provided in constructor when class in initialized.
  defaultLabel;
  duration;
  timeoutId;

  constructor(setStatus, defaultLabel = 'Copy output', duration = 2000) {
    this.setStatus = setStatus;
    this.defaultLabel = defaultLabel;
    this.duration = duration;
    this.timeoutId = null;
  }

  async copy(text = '') {
    try {
      await this.#writeToClipboard(text);
      this.setStatus('Copied');

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.#resetTimer();
    } catch {
      this.setStatus('Copy failed');
    }
  }

  #writeToClipboard(text) {
    return navigator.clipboard.writeText(text || '');
  }

  #resetTimer() {
    this.timeoutId = setTimeout(() => {
      this.setStatus(this.defaultLabel);
      this.timeoutId = null;
    }, this.duration);
  }

  clear() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}
