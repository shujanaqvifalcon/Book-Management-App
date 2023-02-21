const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    host: '127.0.0.1',
    dialect: 'mysql',
    // operatorsAliases: false,
  },
  test: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "mysql",
    // operatorsAliases: false,
  },
  production: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};