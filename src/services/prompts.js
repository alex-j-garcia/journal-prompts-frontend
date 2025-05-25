import api from '@services/api';
import createAuthenticationHeaderFromUser from '@modules/common/utils/createAuthenticationHeaderFromUser';
import { ENDPOINTS } from '@modules/common/api/constants';

const getActivePrompt = async (user) => {
  const authenticationHeader = createAuthenticationHeaderFromUser(user);
  
  try {
    const { data: activePrompt } = await api.get(ENDPOINTS.activePrompt, authenticationHeader);
    return activePrompt;
  } catch (error) {
    console.log(error.response.data);
  }
}

export default {
  getActivePrompt
};
