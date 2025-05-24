import { useState } from 'react';
import useWordCount from './useWordCount';
import answersService from '@services/answers';

const usePromptForm = (user, prompt, triggerRefetch) => {
  const [answer, setAnswer] = useState('');
  const [wordCount, setWordCount] = useWordCount();

  const updateAnswer = (changeEvent) => {
    const answer = changeEvent.target.value;
    setAnswer(answer);
    setWordCount(answer);
  };

  const submitAnswer = async (submitEvent) => {
    submitEvent.preventDefault();

    try {
      await answersService.addPromptAnswer({
        user,
        answer,
        promptId: prompt.id,
      });

      setAnswer('');
      setWordCount('');
      triggerRefetch();
    } catch (error) {
      console.log(`Error submitting answer: ${error}`)
    }
  };

  return {
    answer,
    wordCount,
    updateAnswer,
    submitAnswer,
  };
};

export default usePromptForm;
