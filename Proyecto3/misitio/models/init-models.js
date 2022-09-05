var DataTypes = require("sequelize").DataTypes;
var _Editorials = require("./Editorials");
var _Superheroes = require("./Superheroes");

function initModels(sequelize) {
  var Editorials = _Editorials(sequelize, DataTypes);
  var Superheroes = _Superheroes(sequelize, DataTypes);

  Superheroes.belongsTo(Editorials, { as: "editorial", foreignKey: "editorialId"});
  Editorials.hasMany(Superheroes, { as: "Superheros", foreignKey: "editorialId"});

  return {
    Editorials,
    Superheroes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
