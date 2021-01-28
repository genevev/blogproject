/* eslint-disable linebreak-style */
/* eslint-disable lines-around-directive */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
module.exports = function (sequelize, Sequelize) {
  const Post = sequelize.define('Posts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    userId: {
      type: Sequelize.NUMBER,
      unique: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
  });
  // eslint-disable-next-line no-undef
  return Posts;
};
