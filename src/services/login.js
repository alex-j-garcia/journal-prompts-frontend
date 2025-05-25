import api from '@services/api';
import { ENDPOINTS } from '@modules/common/api/constants';

const getBearerToken = async (credentials) => {
  try {
    const { data: bearerToken } = await api.post(ENDPOINTS.login, credentials);
    return bearerToken;
  } catch (error) {
    console.log(error.response.data);
  }
};

export default {
  getBearerToken
};
