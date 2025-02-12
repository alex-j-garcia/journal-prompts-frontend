import { useState, useEffect } from 'react';
import promptsService from '../services/prompts';

const usePrompt = (user) => {
  const [prompt, setPrompt] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetch, setIsRefetch] = useState(false);

  const fetchPrompt = async () => {
    try {
      const prompt = await promptsService.getActivePrompt(user);
      return prompt;
    } catch (error) {
      console.log(`Error fetching prompt: ${error}`);
    }
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
  };
};

export default usePrompt;
