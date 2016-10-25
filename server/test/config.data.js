const restaurantUri = 'http://127.0.0.1:3000/api/restaurants';
const userUri = 'http://127.0.0.1:3000/api/user';
const baseUri = 'http://127.0.0.1:3000/';
const users = [
  {
    name: 'John',
    lastname: 'Doe',
    username: 'jdoe',
    password: '123456',
    email: 'jdoe@gmail.com',
  },
  {
    name: 'Kevin',
    lastname: 'Doe',
    username: 'kdoe',
    password: '123456',
    email: 'kdoe@gmail.com',
  }
];

module.exports = {
  baseUri,
  users,
  restaurant: {
    get: {
      uri: restaurantUri,
      method: 'GET',
    },
    post: {
      uri: restaurantUri,
      method: 'POST',
      json: {
        name: 'test restaurant',
      },
    },
    delete: {
      uri: restaurantUri,
      method: 'DELETE',
      json: {
        name: 'test restaurant',
      }
    },
  },
  user: {
    post: {
      uri: userUri,
      method: 'POST',
      json: users[0],
    },
    delete: {
      uri: userUri,
      method: 'DELETE',
      json: users[0],
    },
  },
}
