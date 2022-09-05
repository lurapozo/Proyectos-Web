const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Superheroes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    primeraAparicion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    editorialId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Editorials',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Superheroes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "editorialId",
        using: "BTREE",
        fields: [
          { name: "editorialId" },
        ]
      },
    ]
  });
};
