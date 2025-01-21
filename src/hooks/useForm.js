import { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue('');
  };

  return {
    value,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
