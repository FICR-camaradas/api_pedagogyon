'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contrato.belongsTo(models.Usuario, {
        foreignKey: "idUsuarioCliente",
        targetKey: "id"
      })
      Contrato.belongsTo(models.Usuario, {
        foreignKey: "idDependente",
        targetKey: "id"
      })
      Contrato.belongsTo(models.Usuario, {
        foreignKey: "idUsuarioProfissional",
        targetKey: "id"
      })
    }
  };
  Contrato.init({
    valor_pago: DataTypes.FLOAT,
    descricao: DataTypes.TEXT,
    avalicao: DataTypes.FLOAT,
    comentario: DataTypes.TEXT,
    idUsuarioCliente: DataTypes.INTEGER,
    idDependente: DataTypes.INTEGER,
    idUsuarioProfissional: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contrato',
  });
  return Contrato;
};