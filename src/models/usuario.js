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
    }
  };
  Usuario.init({
    uuid: DataTypes.UUIDV4,
    tipo: DataTypes.INTEGER,
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
    telefone: DataTypes.STRING,
    especializacao: DataTypes.STRING,
    observacoes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};