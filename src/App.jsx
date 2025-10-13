import { useState } from 'react';
import TextInputField from './components/TextInputField';
import HtmlOutput from './components/HtmlOutputField';
import { MarkupConverter } from '@an-eriksson/markup-converter';
import Header from './components/Header';
import Footer from './components/Footer';
import Toolbar from './components/Toolbar';
import Translator from './components/Translator';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [copyStatus, setCopyStatus] = useState('Copy');
  const [copyTimeoutId, setCopyTimeoutId] = useState(null);


  const markupConverter = new MarkupConverter();
  const htmlOutput = inputText
    ? markupConverter.convert(inputText) // Mask bug where MarkupConverter wraps empty line in <p> tags. Remove conditional when module is patched!
    : '';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(htmlOutput)
    setCopyStatus('Copied')

    if (copyTimeoutId) {
      clearTimeout(copyTimeoutId);
    }

    const id = setTimeout(() => {
      setCopyStatus('Copy');
      setCopyTimeoutId(null);
    }, 2000)

    setCopyTimeoutId(id);
  }


  const handleInputChange = event => {
    setInputText(event.target.value);
  };
  return (
    <div className='flex flex-col items-center min-h-screen gap-4 bg-gray-200'>
      <Header />
      <Toolbar
        // onSave={handleSave}
        // onLoad={handleLoad}
        onCopy={handleCopy}
        copyStatus={copyStatus} />
      <main className='flex gap-4 flex-1 w-full px-4'>
        <TextInputField
          value={inputText}
          onChange={handleInputChange}
        />

        <HtmlOutput
          htmlOutput={htmlOutput} />
        <Translator
          stringToTranslate={'Hello world!'}
          lang={'es'}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
