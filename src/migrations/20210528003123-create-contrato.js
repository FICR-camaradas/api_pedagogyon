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
        field: "idUsuarioCliente",
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id"
        }
      },
      idDependente: {
        field: "idDependente",
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: "Dependentes",
          key: "id"
        }
      },
      idUsuarioProfissional: {
        field: "idUsuarioProfissional",
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
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