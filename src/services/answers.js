import axios from 'axios';
import endpoints from './endpoints';

const api = axios.create({ baseURL: endpoints.baseUrl });

const addAnswer = async (payload) => {
  const { user } = payload;
  const userID = user === null ? user : user.id
  
  try {
    const promise = await api.post(endpoints.answers, {
      ...payload,
      user: userID,
    });
    return promise.data;
  } catch (error) {
    console.log(`Backend communication error: ${error}`);
  }
};

const getAnswer = async () => {
  const promise = await api.get(endpoints.answers);
  return promise.data;
};

export default {
  addAnswer,
  getAnswer,
}
