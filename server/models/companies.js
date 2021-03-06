//Company Schema
module.exports = (sequelize, DataTypes) => {
    let company = sequelize.define("companies", {
      name: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, field: 'created_at' },
      updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
    },
    {
        freezeTableName: true
    });
    company.associate = function(models) {
        company.hasMany(models.users, {
            foreignKey: "company_id",
            as: "users",
          });
        company.hasMany(models.properties,{
            foreignKey:"company_id",
            as: "properties",
        });
    }
    return company
  }