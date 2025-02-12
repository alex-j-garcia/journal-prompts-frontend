import axios from "axios";
import endpoints from "./endpoints";

const api = axios.create({ baseURL: endpoints.baseUrl });

const getActivePrompt = async (user) => {
  const userID = user === null ? user : user.id;
  
  const activePrompt = await api
    .get(
      endpoints.activePrompt,
      { headers: { user: userID } },
    );
  return activePrompt.data;
}

export default {
  getActivePrompt,
};
