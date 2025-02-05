import { useState } from 'react';
import useWordCount from './useWordCount';
import answersService from '../services/answers';

const useForm = () => {
  const [value, setValue] = useState('');
  const { wordCount, handleWordCount } = useWordCount();

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
    handleWordCount(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const promise = await answersService.addAnswer(value);
    } catch (error) {
      console.log(`Error submitting answer: ${error}`)
    }

    setValue('');
    handleWordCount('');
  };

  return {
    value,
    wordCount,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
