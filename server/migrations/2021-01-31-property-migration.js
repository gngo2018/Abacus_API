module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable("properties", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            company_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "companies",
                    key: "id",
                    as: "companyId",
                  },
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone_number: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            units_total: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            units_utilized: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            annual_revenue: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            annual_revenue_datetime: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("properties"),
}