module.exports = (sequelize, DataTypes) => {
    let user = sequelize.define("users", {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      is_valid: DataTypes.BOOLEAN,
      createdAt: { type: DataTypes.DATE, field: 'created_at' },
      updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
    },
    {
      freezeTableName: true
    });
    user.associate = function(models) {
      user.belongsTo(models.companies, {
        foreignKey: "company_id",
      });
    }
    return user
  }