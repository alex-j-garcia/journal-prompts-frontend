import api from './api';
import createAuthenticationHeaderFromUser from '@modules/common/utils/createAuthenticationHeaderFromUser';
import endpoints from './endpoints';

const getActivePrompt = async (user) => {
  const authenticationHeader = createAuthenticationHeaderFromUser(user);
  
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
