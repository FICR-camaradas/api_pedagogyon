'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dependentes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING
      },
      orgao_expedidor: {
        type: Sequelize.STRING
      },
      data_nasc: {
        type: Sequelize.DATEONLY
      },
      sexo: {
        type: Sequelize.STRING
      },
      observacoes: {
        type: Sequelize.TEXT
      },
      idCliente: {
        field: "idCliente",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Clientes",
          key: "id"
        }
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
    await queryInterface.dropTable('Dependentes');
  }
};