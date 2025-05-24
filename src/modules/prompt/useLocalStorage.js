import { useState, useEffect, } from 'react';

const STORAGE_KEY = 'journal-prompts-app';

const useLocalStorage = () => {
  const [localEntries, setLocalEntries] = useState(
    JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {}
  );

  useEffect(() => {
    // Never save user tokens to local storage
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(localEntries));
  }, [localEntries]);

  return [
    localEntries,
    setLocalEntries,
  ];
};

export default useLocalStorage;
