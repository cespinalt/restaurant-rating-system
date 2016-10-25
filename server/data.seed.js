const request = require('request');
const userUri = 'http://127.0.0.1:3000/api/users';
const restaurantUri = 'http://127.0.0.1:3000/api/restaurants';

const users = [
  {
    name: 'Peter',
    lastname: 'John',
    username: 'pjohn',
    password: '123456',
    email: 'pj@gmail.com',
  },
  {
    name: 'Jay',
    lastname: 'Mathew',
    username: 'jmath',
    password: '123456',
    email: 'jmath@gmail.com',
  }
];

const restaurants = [
  {
    name: 'Lamar',
    thumbnail: 'lamar.jpg',
  },
  {
    name: 'Kokkari Estiatorio',
    thumbnail: 'kokkari.jpg',
  },
  {
    name: 'chotto',
    thumbnail: 'chottobar.jpg',
  }
]

const postUser = {
  uri: userUri,
  method: 'POST',
  json: users[0],
}

const postRestaurant = {
  uri: restaurantUri,
  method: 'POST',
  json: restaurants[0],
}

request(postUser, (err, res, body) => {
  if(res.statusCode === 201) {
    console.log('User created');
  }
});

postUser.json = users[1];
request(postUser, (err, res, body) => {
  if(res.statusCode === 201) {
    console.log('User created');
  }
});

request(postRestaurant, (err, res, body) => {
  if(res.statusCode === 201) {
    console.log('Restaurant created');
  }
});

postRestaurant.json = restaurants[1];
request(postRestaurant, (err, res, body) => {
  if(res.statusCode === 201) {
    console.log('Restaurant created');
  }
});

postRestaurant.json = restaurants[2];
request(postRestaurant, (err, res, body) => {
  if(res.statusCode === 201) {
    console.log('Restaurant created');
  }
});
