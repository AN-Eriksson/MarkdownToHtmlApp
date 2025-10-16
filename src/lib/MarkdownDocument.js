export default class MarkdownDocument {
    textContent;

    constructor(textContent) {
        if (typeof textContent !== 'string') {
            throw new TypeError('MarkdownDocument text content must be a string')
        }
        
        this.textContent = textContent;
    }

    toString() {
        return this.textContent;
    }
}