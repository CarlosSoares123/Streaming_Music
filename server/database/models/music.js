'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Music.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    }
  }
  Music.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    audioPath: DataTypes.STRING,
    imagePath: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Music',
  });
  
  return Music;
};