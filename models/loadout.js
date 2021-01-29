'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loadout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.loadout.belongsTo(models.user)
      models.loadout.belongsToMany(models.attachments, {through: 'loadouts_attachments'})
    }
  };
  loadout.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'loadout',
  });
  return loadout;
};