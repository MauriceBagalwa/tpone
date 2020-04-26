/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    psswd: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isAdmin: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};
