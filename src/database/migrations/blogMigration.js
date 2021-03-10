module.exports = { 
    up: async (querryInterface, Sequelize) => { 
        await querryInterface.createTable('blog', { 
            id: { 
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: { 
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true
            },
            title: { 
                type: Sequelize.STRING,
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
    },
    down: async (querryInterface, Sequelize) => { 
        await querryInterface.dropTable('blog');
    },
};