const {Restaurant, User, Rating} = require('../../db');
const controller = {};

// Find all restaurant and return in in ASC order
controller.all = (req, res) => {
  Restaurant.findAll({order: ['id']})
    .then(results => {res.status(200).json({restaurants: results})})
    .catch(err => console.log(err));
};

controller.rate = (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const rest_id = parseInt(req.body.restID);
  const user_rating = parseInt(req.body.value);

  // Find username that submitted the rating and get is id
  User.findOne({where: {username,}})
  .then((user) => {
    if (user !== null) {

      // Then check if the user has already rated this restaurant, if it has
      // Do nothing, else create the new record rating and update the
      // Restaurant table with the current points and current users that has voted
      Rating.findOrCreate({where: {rest_id, user_id: user.id}})
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
    } else { res.status(204).json({msg: 'No such username exist'});}
  })
};


// This is merely use for the sake of adding restaurants, but the app don't
// really need this method. This should be removed from the API, but its here
// to make it easier to create a Restaurant without having to go to the DB
controller.add = (req, res) => {
  const name = req.body.name;
  const thumbnail = req.body.thumbnail || 'smith.jpg';
  Restaurant.findOrCreate({where: {name: name, users: 0, points: 0, thumbnail,}})
  .spread((rest, created) => {
    if(created) {
      res.status(201).json({msg: 'Restaurant successfully added'});
    } else {
      res.status(409).json({msg: 'Restaurant already exist'});
    }
  });
};


// This is merely use for the sake of deleting restaurants, but the app don't
// really need this method
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
