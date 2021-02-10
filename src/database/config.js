import 'dotenv/config';

const dbconfig = { 
  development: { 
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'mysql',
    seederStorage: 'sequelize',
  },
  test: { 
    username: process.env.DB_USER_TEST,
    password: '',
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    logging: false,
  },
  production: { 
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    logging: false,
  },
};

 module.exports = dbconfig;