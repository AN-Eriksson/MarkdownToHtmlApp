import { useState, useRef, useEffect } from 'react';
import TextInputField from './components/TextInputField';
import HtmlOutput from './components/HtmlOutput';
import { MarkupConverter } from '@an-eriksson/markup-converter';
import Header from './components/Header';
import Footer from './components/Footer';
import Toolbar from './components/Toolbar';
import TranslationOutput from './components/TranslationOutput';
import translate from 'translate';
import TranslateButton from './components/TranslateButton';
import CopyManager from './lib/CopyManager';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [copyStatus, setCopyStatus] = useState('Copy');

  const [mode, setMode] = useState('translate');
  const [loading, setLoading] = useState(false);

  const [htmlOutput, setHtmlOutput] = useState('');
  const [translatedText, setTranslatedText] = useState('');


  const markupConverter = new MarkupConverter();

  // Get references to the lib classes

  const copyManagerRef = useRef(null)
  useEffect(() => {
    copyManagerRef.current = new CopyManager(setCopyStatus, 'Copy', 2000)
    return () => {
      copyManagerRef.current?.clear()
    }
  }, [setCopyStatus])

  const handleCopy = async () => {
    const textToCopy = mode === 'html' ? htmlOutput : translatedText;
    await copyManagerRef.current.copy(textToCopy);
  }


  const handleConversionProcess = async () => {
    if (!inputText) {
      setHtmlOutput(markupConverter.convert(inputText));
      setTranslatedText('');
      return;
    }

    setLoading(true);
    if (mode === 'html') {
      setHtmlOutput(markupConverter.convert(inputText));

    } else {
      const translatedText = await translate(inputText, 'es');
      setTranslatedText(translatedText);
    }

    setLoading(false);
  }


  const toggleMode = () => {
    setMode(mode => mode === 'html' ? 'translate' : 'html')
  }

  const handleInputChange = event => {
    setInputText(event.target.value);
  };
  return (
    <div className='flex flex-col items-center min-h-screen gap-4 bg-gray-200'>
      <Header />
      <Toolbar
        onCopy={handleCopy}
        copyStatus={copyStatus}
        mode={mode}
        onToggleMode={toggleMode} />
      <main className='flex gap-4 flex-1 w-full px-4'>
        <TextInputField
          value={inputText}
          onChange={handleInputChange}
        />

        <div className='flex flex-col gap-2 w-1/8 my-auto'>
          <TranslateButton onClick={handleConversionProcess} loading={loading} />
        </div>

        {mode === 'html' ? (
          <HtmlOutput
            htmlOutput={htmlOutput} />
        ) : (
          <TranslationOutput
            translatedText={translatedText}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
