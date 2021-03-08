module.exports = (sequelize, Sequelize) => { 
    const Blog = sequelize.define( 
        'Blog',
        { 
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
        },
        { 
            tableName: 'Blog',
        },
        {},
    );
    return Blog;
};