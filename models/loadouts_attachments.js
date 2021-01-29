'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loadouts_attachments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  loadouts_attachments.init({
    loadoutId: DataTypes.INTEGER,
    attachmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'loadouts_attachments',
  });
  return loadouts_attachments;
};