//Company Schema
module.exports = (sequelize, DataTypes) => {
    let Company = sequelize.define("Company", {
      companyName: DataTypes.STRING,
    },
    {
        freezeTableName: true
    })
    Company.associate = function(models) {
        Company.hasMany(models.User, {
            foreignKey: "companyId",
            as: "users",
          })
    }
    return Company
  }