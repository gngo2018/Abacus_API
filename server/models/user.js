module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
      email: DataTypes.STRING,
    })
    User.associate = function(models) {
      User.belongsTo(models.Company, {
        foreignKey: "companyId",
      })
    }
    return User
  }