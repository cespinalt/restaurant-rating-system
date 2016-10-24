module.exports = (sequelize, DataTypes) => {
  return sequelize.define('restaurant', {
    name: DataTypes.STRING,
    users: {
      type: DataTypes.INTEGER,
      validate: {isNumeric: true,},
    },
    points: {
      type: DataTypes.INTEGER,
      validate: { isNumeric: true,},
    }
  },{
    getterMethods: {
      average: function() {
        const average = this.points / this.users;
        return isNaN(average)  ? 0 : average;
      }
    },
    timestamps: false,
  });
};
