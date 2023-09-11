const { Sequelize } = require('sequelize');

// Replace the following values with your MySQL database credentials
const sequelize = new Sequelize('crud_api', 'root', 't3rm1nat0r', {
  host: 'localhost',
  dialect: 'mysql', // or 'postgresql', 'sqlite', 'mariadb'
  port: 3306, // Port for MySQL
  logging: false, // Set to true to log SQL queries (optional)
  dialectModule: require('mysql2'),

});

module.exports = sequelize;
