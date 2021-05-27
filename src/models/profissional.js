'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profissional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profissional.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
        targetKey: "id"
      })
      Profissional.hasMany(models.Contrato, {
        foreignKey: "idProfissional",
        sourceKey: "id"
      })
    }
  };
  Profissional.init({
    idUsuario: DataTypes.INTEGER,
    especializacao: DataTypes.STRING,
    observacoes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Profissional',
  });
  return Profissional;
};