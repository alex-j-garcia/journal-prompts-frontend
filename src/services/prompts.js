import axios from "axios";
import endpoints from "./endpoints";

const api = axios.create({ baseURL: endpoints.baseUrl });

const getActivePrompt = async (user) => {
  const activePrompt = await api
    .get(
      endpoints.activePrompt,
      { headers: { user } },
    );
  return activePrompt.data;
}

export default {
  getActivePrompt,
};
