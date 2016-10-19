module.exports = (sequelize, DataTypes) => {
  return sequelize.define('rating', {
    rest_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
  });
};
