module.exports = { 
  up: async (querryInterface, Sequelize) => { 
    await querryInterface.createTable('user', { 
      id: { 
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email: { 
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      username: { 
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: { 
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      createdAt: { 
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updatedAt: { 
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
    
    });

    down: async (queryInterface, Sequelize) => { 
      await queryItenface.dropTable('user');
    }
  }
}
  

