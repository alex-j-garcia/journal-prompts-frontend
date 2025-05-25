import axios from 'axios';
import { ENDPOINTS } from '@modules/common/api/constants';

const api = axios.create({
  baseURL: ENDPOINTS.baseUrl
});

export default api;
