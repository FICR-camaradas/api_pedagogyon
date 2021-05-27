'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Cliente, {
        foreignKey: "idUsuario",
        sourceKey: "id"
      })
      Usuario.hasMany(models.Profissional, {
        foreignKey: "idUsuario",
        sourceKey: "id"
      })
      Usuario.hasMany(models.Mensagem, {
        foreignKey: "idUsuarioOrigem",
        sourceKey: "id"
      })
      Usuario.hasMany(models.Mensagem, {
        foreignKey: "idUsuarioDestino",
        sourceKey: "id"
      })
    }
  };
  Usuario.init({
    tipo: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    imagem: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    orgao_expedidor: DataTypes.STRING,
    data_nasc: DataTypes.DATEONLY,
    sexo: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};