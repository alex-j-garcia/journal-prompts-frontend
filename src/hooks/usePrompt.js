import { useState, useEffect } from 'react';
import promptsService from '../services/prompts';

const usePrompt = () => {
  const [prompt, setPrompt] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getActivePrompt = async () => {
    try {
      setIsLoading(true);
      const data = await promptsService.getActivePrompt();
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
  };
};

export default usePrompt;
