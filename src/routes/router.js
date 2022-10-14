const express = require("express");
const produtoController = require("../controllers/ProdutoController");
const routes = express.Router();

routes.post("/create", produtoController.create);
routes.get("/list", produtoController.list);
routes.put("/update", produtoController.update);
routes.get("/getId", produtoController.getId);
routes.delete("/delete", produtoController.delete);

module.exports = routes;
