const ModelProduto = require("../models/produto");

module.exports = {
  async Create(req, res) {
    try {
      const produtos = await ModelProduto.create({
        nome: req.body.nome,
        preco: req.body.preco,
      });
      res
        .status(201)
        .json({ mensagem: "Produto cadastrado no banco com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async List(req, res) {
    try {
      const produtos = await ModelProduto.findAll();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async Update(req, res) {
    try {
      const prod = await ModelProduto.findByPk(req.body.Codigo);
      if (prod) {
        prod.nome = req.body.nome;
        prod.preco = req.body.preco;
        await prod.save();
      }

      res.status(200).json(prod);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async GetOne(req, res) {
    try {
      const prod = await ModelProduto.findByPk(req.body.Codigo);

      res.status(200).json(prod);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async Delete(req, res) {
    try {
      const prod = await ModelProduto.findByPk(req.body.Codigo);
      await prod.destroy();

      res.status(200).json(prod);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
