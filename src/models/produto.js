const { DataTypes } = require("sequelize");
const database = require("../../db/db");

const Produto = database.define("Produto", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL,
    required: true,
  },
});
module.exports = Produto;
