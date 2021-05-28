'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dependente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dependente.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
        targetKey: "id"
      })
      Dependente.hasMany(models.Contrato, {
        foreignKey: "idDependente",
        sourceKey: "id"
      })
    }
  };
  Dependente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    orgao_expedidor: DataTypes.STRING,
    data_nasc: DataTypes.DATEONLY,
    sexo: DataTypes.STRING,
    observacoes: DataTypes.TEXT,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dependente',
  });
  return Dependente;
};