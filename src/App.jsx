import { useState } from 'react';
import MarkdownInputField from './components/MarkdownInputField';
import HtmlOutputField from './components/HtmlOutputField';
import { MarkupConverter } from '@an-eriksson/markup-converter';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [markdownInput, setMarkdownInput] = useState('');

  const markupConverter = new MarkupConverter();
  const htmlOutput = markupConverter.convert(markdownInput);

  const handleInputChange = event => {
    setMarkdownInput(event.target.value);
  };
  return (
    <div className='flex flex-col items-center min-h-screen gap-4 bg-gray-200'>
      <Header />
      <main className='flex gap-4 flex-1 w-full px-4'>
        <MarkdownInputField
          className='flex-1'
          value={markdownInput}
          onChange={handleInputChange}
        />

        <HtmlOutputField className='flex-1' htmlOutput={htmlOutput} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
