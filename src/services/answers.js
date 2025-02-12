import axios from 'axios';
import endpoints from './endpoints';

const api = axios.create({ baseURL: endpoints.baseUrl });

const addAnswer = async (payload) => {
  const { answer, promptId, user } = payload;
  const customHeader = {};
  
  if (user && user.id) {
    customHeader.user = user.id;
  } else if (user && user.token) {
    customHeader.authorization = `Bearer ${user.token}`;
  }
  
  try {
    const promise = await api.post(
      endpoints.answers,
      { answer, promptId, },
      { headers: customHeader },
    );
    return promise.data;
  } catch (error) {
    console.log(`Backend communication error on answer POST: ${error}`);
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
