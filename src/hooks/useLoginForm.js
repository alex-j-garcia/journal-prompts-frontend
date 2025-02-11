import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import loginService from '../services/login';

const useLoginForm = () => {
  const [formHint, setFormHint] = useState('');
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleEvent = async (event) => {
    event.preventDefault();

    const { type, target } = event;
    
    if (type === 'submit') {
      // TO-DO: store token in state
      const data = await loginService.login(formState);
      
      if (data.error) {
        setFormHint(data.error);
      } else {
        console.log(`User logged in: ${data.token}`);
        navigate('/');
      }
    } else if (type === 'change') {
      const { id, value } = target;
      setFormState({ ...formState, [id]: value,});
    }
  };

  return {
    formHint,
    formState,
    handleEvent,
  };
};

export default useLoginForm;
