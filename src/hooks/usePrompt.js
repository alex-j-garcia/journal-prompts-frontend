import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import promptsService from '../services/prompts';
import answersService from '../services/answers';

const usePrompt = (user) => {
  const [prompt, setPrompt] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetch, setIsRefetch] = useState(false);
  const [localEntries, setLocalEntries] = useLocalStorage();
  
  const fetchPrompt = async () => {
    try {
      const prompt = await promptsService.getActivePrompt(user);
      return prompt;
    } catch (error) {
      console.log(`Error fetching prompt: ${error}`);
    }
  };

  const setActivePrompt = async () => {
    setIsLoading(true);

    try {
      const prompt = await fetchPrompt();
      
      // Unregistered users who've answered prompt are shown modified prompt
      if (!user && Object.hasOwn(localEntries, prompt.id)) {
        setPrompt({
          ...prompt,
          answers: localEntries[prompt.id].answers,
        });
      } else {
        // All users that haven't answered are shown prompt as-is
        setPrompt(prompt);
      }
    } catch (exception) {
      console.log(`Error fetching prompt: ${exception.name}: ${exception.message}`);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const setActivePromptWithAnswers = async () => {
    setIsRefetch(false);

    try {
      if (user) {
        const data = await fetchPrompt();
        setPrompt(data);
      } else {
        const currentPromptAnswers = await answersService.getPromptAnswers(prompt.id)
        const newData = { ...prompt, answers: currentPromptAnswers };
        setLocalEntries({
          ...localEntries,
          [prompt.id]: newData
        });
        setPrompt(newData);
      }
    } catch (exception) {
      console.log(`Error refetching prompt: ${exception.name}: ${exception.message}`);
    }
  };

  useEffect(() => {
    if (!isRefetch && !Object.hasOwn(prompt, 'content')) {
      setActivePrompt();
    }

    if (isRefetch) {
      setActivePromptWithAnswers();
    }
  }, [isRefetch]);

  const triggerRefetch = () => {
    setIsRefetch(true);
  };

  return { 
    prompt,
    isError,
    isLoading,
    triggerRefetch,
  };
};

export default usePrompt;
