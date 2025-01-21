import axios from "axios";
import endpoints from "./endpoints";

const api = axios.create({ baseURL: endpoints.baseUrl });

const getAllPrompts = async () => {
  const promise = await api.get(endpoints.allPrompts);
  return promise.data;
}

const getTodaysPrompt = async () => {
  const prompts = await getAllPrompts();
  const promptsWithDates = prompts.map((prompt) => {
    const date = new Date(prompt.date);
    return { ...prompt, date };
  });
  const todaysPrompt = promptsWithDates.reduce((acc, curr) => (
    curr.date > acc.date ? curr : acc
  ));
  return todaysPrompt;
}

export default {
  getAllPrompts,
  getTodaysPrompt,
};
