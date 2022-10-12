const { Sequelize } = require("sequelize");

const database = new Sequelize("api-crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  database.authenticate();
  console.log("Conectado no banco com sucesso!");
} catch (error) {
  console.log(`Não foi possível conectar: ${error}`);
}
database.sync();

module.exports = database;
