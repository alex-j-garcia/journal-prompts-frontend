import axios from "axios";
import endpoints from "./endpoints";

const api = axios.create({ baseURL: endpoints.baseUrl });

const login = async (credentials) => {
  try {
    const tokenResponse = await api.post(endpoints.login, credentials);
    return tokenResponse.data;
  } catch (errorPayload) {
    return errorPayload.response.data;
  }
};

export default {
  login,
};
