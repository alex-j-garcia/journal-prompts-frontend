import axios from "axios";

const baseUrl = '/api/entries';

const addEntry = async (data) => {
  const promise = await axios.post(baseUrl, data)
  return promise.data;
};

export default {
  addEntry,
}
