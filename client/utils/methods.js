import axios from 'axios';

const api = {}

api.getRestaurants = () => {
  // let restaurants;
  return axios.get('http://localhost:3000/api');
};

api.submitRating = (userID, restID, value) => {
  axios.post('/api/rate', {
    params: { userID, restID, value,}
  })
  .then(() =>{

  })
  .catch()
}

export default api;
