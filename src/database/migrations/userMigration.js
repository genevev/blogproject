/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
module.exports = { 
  up: async (queryItenrface, Sequelize) => { 
    await queryInterface.createTable( 
      'Users', { 
        id: { 
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        email: { 
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        username: { 
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        password: { 
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
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => { 
    await queryInterface.dropTable('Users');
  },
};
