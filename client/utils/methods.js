import axios from 'axios';

const api = {}
const uri = 'http://localhost:3000/api/restaurants';

api.getRestaurants = () => {
  return axios.get(uri);
};

api.submitRating = (username, restID, value) => {
  return axios.post('/api/restaurants/rate', {username, restID, value,})
};

export default api;
