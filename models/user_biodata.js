'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_biodata.init({
    nama: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    usia: DataTypes.INTEGER,
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'user_biodata',
  });
  return user_biodata;
};