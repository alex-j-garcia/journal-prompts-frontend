import axios from "axios";
import endpoints from "./endpoints";

const api = axios.create({ baseURL: endpoints.baseUrl });

const getAllPrompts = async () => {
  const promise = await api.get(endpoints.allPrompts);
  return promise.data;
}

const getActivePrompt = async () => {
  const activePrompt = await api.get(endpoints.todaysPrompt);
  return activePrompt.data;
}

export default {
  getAllPrompts,
  getActivePrompt,
};
