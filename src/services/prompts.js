import api from './api';
import createAuthHeaderFromUser from '../utils/createAuthHeaderFromUser';
import endpoints from './endpoints';

const getActivePrompt = async (user) => {
  const authenticationHeader = createAuthHeaderFromUser(user);
  
  try {
    const { data: activePrompt } = await api.get(endpoints.activePrompt, authenticationHeader);
    return activePrompt;
  } catch (error) {
    console.log(error.response.data);
  }
}

export default {
  getActivePrompt
};
