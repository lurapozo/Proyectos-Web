const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Editorials', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    numEmpleados: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fundador: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jefeActual: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    paisOrigen: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Editorials',
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
    ]
  });
};
