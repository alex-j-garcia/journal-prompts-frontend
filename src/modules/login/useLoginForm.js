import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '@services/login';

const useLoginForm = (handleLogin) => {
  const [formHint, setFormHint] = useState('');
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const login = async (submitEvent) => {
    submitEvent.preventDefault();

    try {
      const bearerToken = await loginService.getBearerToken(credentials);
      handleLogin(bearerToken);
      navigate('/');
    } catch (error) {
      setFormHint(`${error.name}: ${error.message}`);
    }

  };

  const updateCredentials = async (changeEvent) => {
    const { id, value } = changeEvent.target;
    setCredentials({ ...credentials, [id]: value,});
  };

  return {
    login,
    formHint,
    credentials,
    updateCredentials,
  };
};

export default useLoginForm;
