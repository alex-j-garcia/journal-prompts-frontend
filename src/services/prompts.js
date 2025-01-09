import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'mobile' ? 
  import.meta.env.VITE_BACKEND_URL :
  'http://localhost:3001/prompts';

const getAll = () => {
  const promise = axios.get(baseUrl);
  return promise.then((response) => response.data);
}

export default getAll;
