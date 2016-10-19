module.exports = (sequelize, DataTypes) => {
  return sequelize.define('restaurant', {
    name: DataTypes.STRING,
    count_user: DataTypes.INTEGER,
    reviews_sum: DataTypes.INTEGER,
  },{
    timestamps: false,
  });
};
