import { useState } from 'react';
import useWordCount from './useWordCount';
import answersService from '../services/answers';

const usePromptForm = (user, prompt, triggerRefetch) => {
  const [answer, setAnswer] = useState('');
  const [wordCount, setWordCount] = useWordCount();

  const handleChange = (event) => {
    const answer = event.target.value;
    setAnswer(answer);
    setWordCount(answer);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await answersService.addAnswer({
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
    handleChange,
    handleSubmit,
  };
};

export default usePromptForm;
