const express = require("express");
const controllerProduto = require("../controllers/ProdutoController");

const routes = express.Router();

routes.post("/Create", controllerProduto.Create);
routes.get("/List", controllerProduto.List);
routes.put("/Update", controllerProduto.Update);
routes.get("/GetOne", controllerProduto.GetOne);
routes.delete("/Delete", controllerProduto.Delete);

module.exports = routes;
