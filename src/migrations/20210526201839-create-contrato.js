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
      idCliente: {
        field: "idCliente",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Clientes",
          key: "id"
        }
      },
      idDependente: {
        field: "idDependente",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Dependentes",
          key: "id"
        }
      },
      idProfessional: {
        field: "idProfissional",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Profissionals",
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
    await queryInterface.dropTable('Contratos');
  }
};