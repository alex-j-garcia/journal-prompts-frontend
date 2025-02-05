import axios from "axios";
import endpoints from "./endpoints";

const api = axios.create({ baseURL: endpoints.baseUrl });

const getActivePrompt = async () => {
  const activePrompt = await api.get(endpoints.activePrompt);
  return activePrompt.data;
}

export default {
  getActivePrompt,
};
