const path = require('path');

module.exports = {
  sequelize: {
    db: 'rest_ratings',
    user: 'postgres',
    password: '123456',
    options: {
      port: 5432,
      dialect: 'postgres',
      host: 'localhost',
    }
  }
};
