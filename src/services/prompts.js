import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'mobile' ? 
  import.meta.env.VITE_BACKEND_URL :
  'http://localhost:3001/prompts';

const getAll = async () => {
  const promise = await axios.get(baseUrl);
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

export default {
  getAll,
  getTodaysPrompt,
};
