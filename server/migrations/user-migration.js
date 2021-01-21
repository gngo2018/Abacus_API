module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable("User", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        companyId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Company",
                key: "id",
                as: "companyId",
              },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("User"),
  }