const express = require("express");
const controllerProduto = require("../controllers/ProdutoController");

const routes = express.Router();

routes.post("/create", controllerProduto.create);
routes.get("/list", controllerProduto.list);
routes.put("/update", controllerProduto.update);
routes.get("/getId", controllerProduto.getId);
routes.delete("/delete", controllerProduto.delete);

module.exports = routes;
