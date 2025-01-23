import { useState, useEffect } from 'react';
import prompts from '../services/prompts';

const usePrompt = () => {
  const [prompt, setPrompt] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getActivePrompt = async () => {
    try {
      setIsLoading(true);
      const response = await prompts.getTodaysPrompt();
      setPrompt(response.data);
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
