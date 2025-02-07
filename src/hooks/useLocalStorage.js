import { useState, useEffect, } from 'react';

const storageKey = 'journal-prompts-app';

const useLocalStorage = () => {
  const [user, setUser] = useState(
    JSON.parse(
      window.localStorage.getItem(storageKey)
    )
  );

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(user));
  }, [user]);

  return [
    user,
    setUser,
  ];
};

export default useLocalStorage;
