'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guns_attachments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  guns_attachments.init({
    gunid: DataTypes.INTEGER,
    attachmentid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'guns_attachments',
  });
  return guns_attachments;
};