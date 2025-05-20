import api from './api';
import endpoints from './endpoints';

const getBearerToken = async (credentials) => {
  try {
    const { data: bearerToken } = await api.post(endpoints.login, credentials);
    return bearerToken;
  } catch (error) {
    console.log(error.response.data);
  }
};

export default {
  getBearerToken
};
