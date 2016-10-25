import axios from 'axios';

const api = {}
const uri = 'http://localhost:3000/api/restaurants';

api.getRestaurants = () => {
  // let restaurants;
  return axios.get(uri);
};

api.submitRating = (userID, restID, value) => {
  console.log(this);
  // axios.post('/api/rate', {
  //   params: { userID, restID, value,}
  // })
  // .then(() => {
  //   // Do nothing
  // })
  // .catch(err => {
  //   // Handle the err
  // })
};

export default api;
