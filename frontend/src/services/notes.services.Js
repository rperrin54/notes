import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/notes';

export default {
  getAll() {
    return axios.get(API_URL);
  },
  create(title) {
    return axios.post(API_URL, { title });
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};