/**
 * Manages copying text to the system clipboard and temporarily the button text with a status label to indicate success or failure.
 *
 * @class CopyManager
 *
 * @param {(label: string) => void} setStatus - Callback used to update UI state. Called with status labels as strings.
 * @param {string} [defaultLabel='Copy output'] - Label to restore after the success indicator expires.
 * @param {number} [duration=2000] - Time in milliseconds that the success status ('Copied') is shown before reverting to defaultLabel.
 */
export default class CopyManager {
  #setStatus;
  #defaultLabel;
  #duration;
  #timeoutId;

  constructor(setStatus, defaultLabel = 'Copy output', duration = 2000) {
    this.#setStatus = setStatus;
    this.#defaultLabel = defaultLabel;
    this.#duration = duration;
    this.#timeoutId = null;
  }

  async copy(text = '') {
    try {
      await this.#writeToClipboard(text);
      this.#setStatus('Copied');

      if (this.#timeoutId) {
        clearTimeout(this.#timeoutId);
      }

      this.#resetTimer();
    } catch {
      this.#setStatus('Copy failed');
    }
  }

  #writeToClipboard(text) {
    if (!navigator?.clipboard?.writeText) {
      throw new Error('Clipboard API not available');
    }

    return navigator.clipboard.writeText(text || '');
  }

  #resetTimer() {
    this.#timeoutId = setTimeout(() => {
      this.#setStatus(this.#defaultLabel);
      this.#timeoutId = null;
    }, this.#duration);
  }

  clear() {
    if (this.#timeoutId) {
      clearTimeout(this.#timeoutId);
      this.#timeoutId = null;
    }
  }
}
