import { useState } from 'react';
import MarkdownInputField from './components/MarkdownInputField';
import HtmlOutputField from './components/HtmlOutputField';

const App = () => {
  const [markdownInput, setMarkdownInput] = useState('');

  const handleInputChange = event => {
    setMarkdownInput(event.target.value);
  }
  return (
    <div className='flex'>
      <MarkdownInputField
        value={markdownInput}
        onChange={handleInputChange} />

      <HtmlOutputField
        markdownInput={markdownInput} />
    </div>
  );
}

export default App;
