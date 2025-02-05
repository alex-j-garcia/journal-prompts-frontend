import { useState } from "react";
import { addAnswer } from '../services/answers';

const useForm = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const promise = await addAnswer(value);
    } catch (error) {
      console.log(`Error submitting answer: ${error}`)
    }

    setValue('');
  };

  return {
    value,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
