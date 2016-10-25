module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: {
        msg: 'The specified username is already in use.',
      }
    },
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
