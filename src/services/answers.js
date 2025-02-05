import axios from 'axios';
import endpoints from './endpoints';

const api = axios.create({ baseURL: endpoints.baseUrl });

const addAnswer = async (data) => {
  const promise = await api.post(endpoints.answers, data);
  return promise.data;
};

const getAnswer = async () => {
  const promise = await api.get(endpoints.answers);
  return promise.data;
};

export default {
  addAnswer,
  getAnswer,
}
