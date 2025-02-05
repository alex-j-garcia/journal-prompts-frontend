
import { useState, } from 'react';

const useLocalStorage = () => {
  const [user] = useState(
    JSON.parse(
      window.localStorage.getItem('journal-prompts-app')
    )
  );

  return {
    user,
  };
};

export default useLocalStorage;
