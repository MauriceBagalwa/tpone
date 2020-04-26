/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tilte: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    attachement: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    likes: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    refuser: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'messages'
  });
};
