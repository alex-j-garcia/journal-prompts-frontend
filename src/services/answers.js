import api from '@services/api';
import createAuthenticationHeaderFromUser from '@modules/common/utils/createAuthenticationHeaderFromUser';
import { ENDPOINTS } from '@modules/common/api/constants';

const addPromptAnswer = async (promptAnswer) => {
  const { answer, promptId, user } = promptAnswer;
  const requestBody = { answer, promptId };
  const authenticationHeader = createAuthenticationHeaderFromUser(user);
  
  try {
    const { data: newAnswer } = await api.post(ENDPOINTS.answers.all, requestBody, authenticationHeader);
    return newAnswer;
  } catch (error) {
    console.log(error.response.data);
  }
};

const getPromptAnswers = async (promptId) => {
  const { data: promptAnswers } = await api.get(ENDPOINTS.answers.find(promptId));
  return promptAnswers;
};

export default {
  addPromptAnswer,
  getPromptAnswers,
}
