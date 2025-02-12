import { useState, useEffect, } from 'react';

const STORAGE_KEY = 'journal-prompts-app';

const useUser = () => {
  const [user, setUser] = useState(
    JSON.parse(
      window.localStorage.getItem(STORAGE_KEY)
    )
  );

  useEffect(() => {
    // Never save user tokens to local storage
    if (user === null || user.id) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  }, [user]);

  return [
    user,
    setUser,
  ];
};

export default useUser;
