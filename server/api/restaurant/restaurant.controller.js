const {Restaurant, User, Rating} = require('../../db');
const controller = {};

controller.all = (req, res) => {
  Restaurant.findAll()
    .then(results => {res.status(200).json({restaurants: results})})
    .catch(err => console.log(err));
};

controller.rate = (req, res) => {
  const user_id = parseInt(req.body.userID);
  const rest_id = parseInt(req.body.restID);
  const user_rating = parseInt(req.body.value);

  Rating.findOrCreate({where: {rest_id, user_id,}})
  .spread((rating, created) => {
      if (created) {
        Restaurant.findOne({where: {id: rest_id}})
          .then((rest => {
            const users = rest.users + 1;
            const points = (rest.points) + user_rating;

            rest.update({users, points});
          })).catch(err => console.log(err));
      }
  })
    .then(() => {
      res.status(201).json({msg: 'Rating uploaded'});
    })
    .catch(err => {console.log(err)});
};

controller.add = (req, res) => {
  const name = req.body.name;
  console.log(name);
  Restaurant.findOrCreate({where: {name: name, users: 0, points: 0}})
  .spread((rest, created) => {
    if(created) {
      res.status(201).json({msg: 'Restaurant successfully added'});
    } else {
      res.status(409).json({msg: 'Restaurant already exist'});
    }
  });
};

controller.delete = (req, res) => {
  const name = req.body.name;
  Restaurant.destroy({where: {name,}})
  .then(data => {
    if(data) {
      res.status(202).json({msg: 'Restaurant deleted'});
    } else {
      res.status(204).json({msg: 'No such restaurant exist'});
    }
  });
};

module.exports = controller;
