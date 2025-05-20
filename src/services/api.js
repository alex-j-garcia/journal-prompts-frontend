import axios from 'axios';
import endpoints from './endpoints';

const api = axios.create({
  baseURL: endpoints.baseUrl
});

export default api;
