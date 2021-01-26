module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("users", {
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
    User.associate = function(models) {
      User.belongsTo(models.company, {
        foreignKey: "company_id",
      })
    }
    return User
  }