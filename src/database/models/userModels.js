module.exports = (sequelize, Sequelize) => { 
    class UserModel = sequelize.define( 
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
    return Users;
};
