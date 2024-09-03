const { Sequelize } = require('@sequelize/core');
const { MySqlDialect } = require('@sequelize/mysql');

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: 'moni_db',
  user: 'root',
  password: 'root',
  host: 'localhost',
  port: 3306,
});

module.exports = {sequelize};