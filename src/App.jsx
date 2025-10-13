import { useState, useRef, useEffect, useMemo } from 'react';
import TextInputField from './components/TextInputField';
import HtmlOutput from './components/HtmlOutput';
import { MarkupConverter } from '@an-eriksson/markup-converter';
import Footer from './components/Footer';
import Toolbar from './components/Toolbar';
import TranslationOutput from './components/TranslationOutput';
import translate from 'translate';
import TranslateButton from './components/TranslateButton';
import CopyManager from './lib/CopyManager';
import ConversionManager from './lib/ConversionManager';

const App = () => {
  // ============ State ============
  const [inputText, setInputText] = useState('');
  const [copyStatus, setCopyStatus] = useState('Copy output');

  const [mode, setMode] = useState('translate');
  const [loading, setLoading] = useState(false);

  const [htmlOutput, setHtmlOutput] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const [langPair, setLangPair] = useState({ from: 'en', to: 'sv' });

  // ============ Initialization ============
  const markupConverter = useMemo(() => new MarkupConverter(), []);

  const conversionManager = useMemo(
    () => new ConversionManager(markupConverter, translate),
    [markupConverter]
  );

  const copyManagerRef = useRef(null);
  useEffect(() => {
    copyManagerRef.current = new CopyManager(
      setCopyStatus,
      'Copy output',
      2000
    );
    return () => {
      copyManagerRef.current?.clear();
    };
  }, [setCopyStatus]);

  // ============ Callbacks ============
  const handleCopy = async () => {
    const textToCopy = mode === 'html' ? htmlOutput : translatedText;
    await copyManagerRef.current.copy(textToCopy);
  };

  const handleConversionProcess = async () => {
    if (!inputText) {
      setHtmlOutput('');
      setTranslatedText('');
      return;
    }

    setLoading(true);
    if (mode === 'html') {
      setHtmlOutput(conversionManager.convertMarkdown(inputText));
    } else {
      const translatedText = await conversionManager.translateText(
        inputText,
        langPair
      );
      setTranslatedText(translatedText);
    }

    setLoading(false);
  };

  const toggleMode = () => {
    setMode(mode => (mode === 'html' ? 'translate' : 'html'));
  };

  const handleInputChange = event => {
    setInputText(event.target.value);
  };

  // ============ Render ============
  return (
    <div className='flex flex-col items-center min-h-screen gap-4 bg-gray-200'>
      <Toolbar
        mode={mode}
        onToggleMode={toggleMode}
        onLanguageSelect={pair => setLangPair(pair)}
      />
      <main className='flex gap-4 flex-1 w-full px-4'>
        <TextInputField value={inputText} onChange={handleInputChange} />

        <div className='flex flex-col gap-2 w-1/8 my-auto'>
          <TranslateButton
            onClick={handleConversionProcess}
            loading={loading}
            mode={mode}
          />
        </div>

        {mode === 'html' ? (
          <HtmlOutput
            htmlOutput={htmlOutput}
            onCopy={handleCopy}
            copyStatus={copyStatus} />
        ) : (
          <TranslationOutput
            translatedText={translatedText}
            onCopy={handleCopy}
            copyStatus={copyStatus} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
