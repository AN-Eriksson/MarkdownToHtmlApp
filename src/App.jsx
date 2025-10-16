import { useState, useRef, useEffect, useMemo } from 'react';
import TextInputField from './components/TextInputField';
import HtmlOutput from './components/HtmlOutput';
import { MarkupConverter } from '@an-eriksson/markup-converter';
import Footer from './components/Footer';
import Toolbar from './components/Toolbar';
import TranslationOutput from './components/TranslationOutput';
import translateFn from 'translate';
import TranslateButton from './components/TranslateButton';
import CopyManager from './lib/CopyManager';
import ConversionManager from './lib/ConversionManager';
import TranslationManager from './lib/TranslationManager';
import useConvert from './hooks/useConvert';
import useTranslate from './hooks/useTranslate';
import LanguagePair from './lib/LanguagePair';
import MarkdownDocument from './lib/MarkdownDocument';

const App = () => {
  // ============ State ============
  const [inputDocument, setInputDocument] = useState(new MarkdownDocument(''));
  const [copyStatus, setCopyStatus] = useState('Copy');
  const [mode, setMode] = useState('translate');
  const [languagePair, setLanguagePair] = useState(
    new LanguagePair('en', 'sv')
  );

  // ============ Initialization ============
  const markupConverter = useMemo(() => new MarkupConverter(), []);

  const conversionManager = useMemo(
    () => new ConversionManager(markupConverter),
    [markupConverter]
  );

  const translationManager = useMemo(
    () => new TranslationManager(translateFn),
    []
  );

  const {
    htmlDocument,
    convert,
    clear: clearConvert,
  } = useConvert(conversionManager);
  const {
    loading,
    translatedDocument,
    translate,
    clear: clearTranslate,
  } = useTranslate(translationManager);

  const copyManagerRef = useRef(null);
  useEffect(() => {
    copyManagerRef.current = new CopyManager(setCopyStatus, 'Copy', 2000);
    return () => {
      copyManagerRef.current?.clear();
    };
  }, [setCopyStatus]);

  // ============ Callbacks ============
  const handleCopy = async () => {
    const textToCopy =
      mode === 'html' ? htmlDocument.toString() : translatedDocument.toString();
    await copyManagerRef.current.copy(textToCopy);
  };

  const handleConversionProcess = async () => {
    if (!inputDocument) {
      clearConvert();
      clearTranslate();
      return;
    }

    if (mode === 'html') {
      convert(inputDocument);
    } else {
      await translate(inputDocument, languagePair);
    }
  };

  const handleInputChange = event => {
    setInputDocument(new MarkdownDocument(event.target.value));
  };

  const handleFileUpload = text => {
    setInputDocument(new MarkdownDocument(text));
  };

  // ============ Render ============
  return (
    <div className='flex flex-col items-center min-h-screen gap-4 bg-gray-200 pt-4'>
      <main className='flex gap-4 flex-1 w-full px-4'>
        <TextInputField value={inputDocument} onChange={handleInputChange} />

        <div className='flex flex-col gap-2 w-1/8 my-auto'>
          <Toolbar
            mode={mode}
            onModeChange={setMode}
            onLanguageSelect={pair => setLanguagePair(pair)}
            onFile={handleFileUpload}
          />
          <TranslateButton
            onClick={handleConversionProcess}
            loading={loading}
            mode={mode}
          />
        </div>

        {mode === 'html' ? (
          <HtmlOutput
            htmlDocument={htmlDocument}
            onCopy={handleCopy}
            copyStatus={copyStatus}
          />
        ) : (
          <TranslationOutput
            translatedDocument={translatedDocument}
            onCopy={handleCopy}
            copyStatus={copyStatus}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
