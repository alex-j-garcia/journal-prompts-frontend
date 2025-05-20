import api from './api';
import createAuthenticationHeaderFromUser from '../utils/createAuthenticationHeaderFromUser';
import endpoints from './endpoints';

const addPromptAnswer = async (promptAnswer) => {
  const { answer, promptId, user } = promptAnswer;
  const requestBody = { answer, promptId };
  const authenticationHeader = createAuthenticationHeaderFromUser(user);
  
  try {
    const { data: newAnswer } = await api.post(endpoints.answers, requestBody, authenticationHeader);
    return newAnswer;
  } catch (error) {
    console.log(error.response.data);
  }
};

const getPromptAnswers = async (promptId) => {
  const { data: promptAnswers } = await api.get(`${endpoints.answers}?promptId=${promptId}`);
  return promptAnswers;
};

export default {
  addPromptAnswer,
  getPromptAnswers,
}
