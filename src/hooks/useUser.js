import { useState, useEffect, } from 'react';

const storageKey = 'journal-prompts-app';

// when a user navigates to a page
  // check if there is a user in localStorage
// if the user ever logs in
  // replace localStorage with the login payload
// if the user object ever has a token, use that for auth`

const useLocalStorage = () => {
  const [user, setUser] = useState(
    JSON.parse(
      window.localStorage.getItem(storageKey)
    )
  );

  console.log('$$$', user);

  useEffect(() => {
    // Never save user tokens to local storage
    if (user && !user.token) {
      window.localStorage.setItem(storageKey, JSON.stringify(user));
    }
  }, [user]);

  return [
    user,
    setUser,
  ];
};

export default useLocalStorage;
