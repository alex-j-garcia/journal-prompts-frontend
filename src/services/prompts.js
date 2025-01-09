import axios from "axios";

const getAll = () => {
  const promise = axios.get('http://localhost:3001/prompts');
  return promise.then((response) => response.data);
}

export default getAll;
