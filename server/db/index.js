const config = require('../config/environment/development');
const Sequelize = require('sequelize');

const db = new Sequelize(config.sequelize.db, config.sequelize.user,
  config.sequelize.password, config.sequelize.options);

const User = db.import('../api/user/user.model.js');
const Restaurant = db.import('../api/restaurant/restaurant.model.js');
const Rating = db.import('../api/rating/rating.model.js');


Rating.belongsTo(Restaurant, {foreignKey: 'rest_id'});
Rating.belongsTo(User, {foreignKey: 'user_id'});

module.exports = {
  Restaurant,
  Rating,
  User,
  db,
};
