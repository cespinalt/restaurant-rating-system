const {Restaurant, User, Rating} = require('../../db');

const controller = {};

controller.all = (req, res) => {
  Restaurant.findAll()
    .then(results => res.json({restaurants: results}))
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
            const count_user = rest.count_user + 1;
            const reviews_sum = (rest.reviews_sum) + user_rating;
            
            rest.update({count_user, reviews_sum});
          })).catch(err => console.log(err));
      }
  })
    .then(() => {
      res.json({msg: 'Rating uploaded'});
    })
    .catch(err => {console.log(err)});
};

module.exports = controller;
