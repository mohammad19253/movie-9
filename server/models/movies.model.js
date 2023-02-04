
const { DataTypes } = require('sequelize')
module.exports = (sequelize, Sequelize) => {
  const Movies = sequelize.define('movies', {
    // Model attributes are defined here
    movie_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    img: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING
    },
    imbd: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.STRING
    },
    isArchive: {
      type: DataTypes.BOOLEAN
    }
  }, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'movies'
  });
  return Movies
}
