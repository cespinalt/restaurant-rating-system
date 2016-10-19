module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'The specified email is already in use.',
      },
      validate: {
        isEmail: true,
      },
    },
  });
};
