import { useState } from 'react';

const useWordCount = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleWordCount = (text) => {
    setWordCount(text.length);
  };

  return [
    wordCount,
    handleWordCount,
  ];
};

export default useWordCount;
