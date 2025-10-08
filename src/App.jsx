import { useState } from 'react';
import MarkdownInputField from './components/MarkdownInputField';
import HtmlOutputField from './components/HtmlOutputField';
import { MarkupConverter } from '@an-eriksson/markup-converter';

const App = () => {
  const [markdownInput, setMarkdownInput] = useState('');
  const markupConverter = new MarkupConverter();
  const htmlOutput = markupConverter.convert(markdownInput);

  const handleInputChange = event => {
    setMarkdownInput(event.target.value);
  }
  return (
    <div className='flex'>
      <MarkdownInputField
        value={markdownInput}
        onChange={handleInputChange} />

      <HtmlOutputField
        htmlOutput={htmlOutput} />
    </div>
  );
}

export default App;
