import axios from "axios";
import endpoints from "./endpoints";

const api = axios.create({ baseURL: endpoints.baseUrl });

const getActivePrompt = async (user) => {
  const customHeader = {};
  
  if (user && user.id) {
    customHeader.user = user.id;
  } else if (user && user.token) {
    customHeader.authorization = `Bearer ${user.token}`;
  }
  
  const activePrompt = await api
    .get(
      endpoints.activePrompt,
      { headers: customHeader },
    );
  return activePrompt.data;
}

export default {
  getActivePrompt,
};
