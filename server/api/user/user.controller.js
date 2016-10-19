const {User} = require('../../db');

const controller = {};

controller.create = (req, res) => {
  User.create({name: 'Pedro', lastname: 'John',
  email: 'pjhon@gmail.com', password: '124'})
    .then(results => res.json({msg: 'User created'}))
    .catch(err => console.log(err));
};

module.exports = controller;
