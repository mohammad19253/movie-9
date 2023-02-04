const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('movie9', 'postgres', 'postgres', {
  host: 'localhost',
  dialect:'postgres'
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.movies = require("./movies.model")(sequelize, Sequelize);
module.exports = db; 