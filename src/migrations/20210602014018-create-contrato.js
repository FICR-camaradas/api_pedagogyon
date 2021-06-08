'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contratos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor_pago: {
        type: Sequelize.FLOAT
      },
      descricao: {
        type: Sequelize.TEXT
      },
      avalicao: {
        type: Sequelize.FLOAT
      },
      comentario: {
        type: Sequelize.TEXT
      },
      idUsuarioCliente: {
        type: Sequelize.INTEGER
      },
      idDependente: {
        type: Sequelize.INTEGER
      },
      idUsuarioProfissional: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Contratos');
  }
};