import { useState } from 'react';
import useWordCount from './useWordCount';
import useLocalStorage from './useLocalStorage';
import answersService from '../services/answers';

const useForm = (prompt) => {
  const [answer, setAnswer] = useState('');
  const { wordCount, handleWordCount } = useWordCount();
  const { user } = useLocalStorage();

  const handleChange = (event) => {
    const answer = event.target.value;
    setAnswer(answer);
    handleWordCount(answer);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const promise = await answersService.addAnswer({
        answer,
        user,
        promptId: prompt.id,
      });

      window.localStorage.setItem(
        'journal-prompts-app',
        JSON.stringify(promise.user)
      );
      
      setAnswer('');
      handleWordCount('');
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

export default useForm;
