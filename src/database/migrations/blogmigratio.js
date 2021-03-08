module.exports = { 
    up: async (querryInterface, Sequelize) => { 
        await querryInterface.createTable('Blog', { 
            id: { 
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: { 
                type: Sequelize.INTEGER,
                allowNull: false
            },
            title: { 
                type: Sequelize.INTEGER,
                allowNull: false
            },
            description: { 
                type: Sequelize.INTEGER,
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
        await querryInterface.dropTable('Blog');
    },
};