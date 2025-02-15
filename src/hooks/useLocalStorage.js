import { useState, useEffect, } from 'react';

const STORAGE_KEY = 'journal-prompts-app';

const useLocalStorage = (user) => {
  const [localStorage, setLocalStorage] = useState(
    JSON.parse(
      window.localStorage.getItem(STORAGE_KEY)
    )
  );

  const handleAnonSubmission = (answerId, answerText, promptId) => {
    setLocalStorage({
      promptId,
      id: answerId,
      answer: answerText
    });
  };
  

  useEffect(() => {
    // Never save user tokens to local storage
    if (!user) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorage));
    }
  }, [localStorage]);

  return [
    localStorage,
    handleAnonSubmission,
  ];
};

export default useLocalStorage;
