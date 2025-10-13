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
      await navigator.clipboard.writeText(text || '');
      this.setStatus('Copied');

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.timeoutId = setTimeout(() => {
        this.setStatus(this.defaultLabel);
        this.timeoutId = null;
      }, this.duration);
    } catch {
      this.setStatus('Copy failed');
    }
  }

  clear() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}
