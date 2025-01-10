import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'mobile' ? 
  import.meta.env.VITE_BACKEND_URL :
  'http://localhost:3001';

const getAll = async () => {
  const promise = await axios.get(`${baseUrl}/prompts`);
  return promise.data;
}

const getTodaysPrompt = async () => {
  const prompts = await getAll();
  const promptsWithDates = prompts.map((prompt) => {
    const date = new Date(prompt.date);
    return { ...prompt, date };
  });
  const todaysPrompt = promptsWithDates.reduce((acc, curr) => (
    curr.date > acc.date ? curr : acc
  ));
  return todaysPrompt;
}

const addEntry = async (data) => {
  const promise = await axios.post(`${baseUrl}/entries`, data)
  return promise.data;
};

export default {
  getAll,
  getTodaysPrompt,
  addEntry,
};
