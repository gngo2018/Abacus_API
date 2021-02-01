module.exports = (sequelize, DataTypes) => {
    let property = sequelize.define("properties", {
        name: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        address: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        email: DataTypes.STRING,
        units_total: DataTypes.INTEGER,
        units_utilized: DataTypes.INTEGER,
        annual_revenue: DataTypes.FLOAT,
        annual_revenue_datetime: DataTypes.DATE,
        createdAt: { type: DataTypes.DATE, field: 'created_at' },
        updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
    },
    {
      freezeTableName: true
    });
    property.associate = function(models) {
        property.belongsTo(models.companies, {
        foreignKey: "company_id",
      });
    }
    return property
  }