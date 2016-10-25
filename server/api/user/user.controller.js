const {User} = require('../../db');

const controller = {};

controller.create = (req, res) => {
  const name = req.body.name;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  User.findOrCreate({where: {name, lastname, password, username, email,}})
  .spread((rest, created) => {
    if(created) {
      res.status(201).json({msg: 'username successfully added'});
    } else {
      res.status(409).json({msg: 'choose another username/email already exist'});
    }
  });
};

controller.remove = (req, res) => {
  const username = req.body.username;

  User.destroy({where: {username,}})
  .then(data => {
    if(data) {
      res.status(202).json({msg: 'User deleted'});
    } else {
      res.status(202).json({msg: 'User not found'});
    }
  }).catch(err => { console.log(err)});
};

module.exports = controller;
