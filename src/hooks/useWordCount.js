import { useState } from 'react';
import getWordCount from '../utils/getWordCount';

const useWordCount = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleWordCount = (text) => {
    setWordCount(getWordCount(text));
  };

  return [
    wordCount,
    handleWordCount,
  ];
};

export default useWordCount;
