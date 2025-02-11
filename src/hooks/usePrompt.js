import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import promptsService from '../services/prompts';

const usePrompt = () => {
  const [prompt, setPrompt] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUSer] = useLocalStorage();
  const [isRefetch, setIsRefetch] = useState(false);

  const fetchPrompt = async () => {
    const prompt = await promptsService.getActivePrompt(user);
    return prompt;
  };

  const getActivePrompt = async () => {
    try {
      setIsLoading(true);
      const data = await fetchPrompt();
      setPrompt(data);
    } catch (exception) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getActivePromptWithAnswers = async () => {
    try {
      setIsRefetch(false);
      const data = await fetchPrompt();
      setPrompt(data);
    } catch (error) {
      console.log(`Error refetching prompt: ${error}`);
    }
  };

  useEffect(() => {
    if (!isRefetch && !Object.hasOwn(prompt, 'content')) {
      getActivePrompt();
    }

    if (isRefetch) {
      getActivePromptWithAnswers();
    }
  }, [isRefetch]);

  const triggerRefetch = () => {
    setIsRefetch(true);
  };

  return { 
    prompt,
    triggerRefetch,
    isError,
    isLoading,
    setUSer,
  };
};

export default usePrompt;
