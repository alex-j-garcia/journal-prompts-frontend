import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import promptsService from '../services/prompts';

const usePrompt = () => {
  const [prompt, setPrompt] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUSer] = useLocalStorage();

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
      const data = await fetchPrompt();
      setPrompt(data);
    } catch (error) {
      console.log(`Error refetching prompt: ${error}`);
    }
  };

  useEffect(() => {
    if (!Object.hasOwn(prompt, 'content')) {
      getActivePrompt();
    }

    if (Object.hasOwn(prompt, 'answers') && prompt.answers.length === 1) {
      getActivePromptWithAnswers()
    }
  }, [prompt]);


  return { 
    prompt,
    setPrompt,
    isError,
    isLoading,
    setUSer,
  };
};

export default usePrompt;
