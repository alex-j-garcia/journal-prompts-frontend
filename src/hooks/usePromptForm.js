import { useState } from 'react';
import useWordCount from './useWordCount';
import answersService from '../services/answers';

const usePromptForm = (user, prompt, handleAnon, triggerRefetch,) => {
  const [answer, setAnswer] = useState('');
  const [ wordCount, setWordCount ] = useWordCount();

  const handleChange = (event) => {
    const answer = event.target.value;
    setAnswer(answer);
    setWordCount(answer);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { id, answer: answerText, promptId, } = await answersService.addAnswer({
        answer,
        user,
        promptId: prompt.id,
      });

      setAnswer('');
      setWordCount('');
      handleAnon(id, answerText, promptId);
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
