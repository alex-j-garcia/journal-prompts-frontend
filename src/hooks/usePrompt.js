import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import promptsService from '../services/prompts';

const usePrompt = () => {
  const [prompt, setPrompt] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUSer] = useLocalStorage();

  const getActivePrompt = async () => {
    try {
      setIsLoading(true);
      const data = await promptsService.getActivePrompt(user);
      setPrompt(data);
    } catch (exception) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getActivePrompt();
  }, []);


  return { 
    prompt,
    isError,
    isLoading,
    setUSer,
  };
};

export default usePrompt;
