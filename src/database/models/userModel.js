module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      'User',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false
        },
        username: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      {
        tableName: 'user'
      },
      {}
    );
    return User;
  };

