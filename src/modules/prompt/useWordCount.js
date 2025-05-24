import { useState } from 'react';
import getWordCountFromText from '@utils/getWordCount';

const useWordCount = () => {
  const [wordCount, setWordCount] = useState(0);

  const updateWordCount = (text) => {
    setWordCount(getWordCountFromText(text));
  };

  return [
    wordCount,
    updateWordCount,
  ];
};

export default useWordCount;
