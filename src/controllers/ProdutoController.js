const modelProduto = require("../models/produto");

module.exports = {
  async create(req, res) {
    try {
      const produtos = await modelProduto.create({
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
  async list(req, res) {
    try {
      const produtos = await modelProduto.findAll();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async update(req, res) {
    try {
      const prod = await modelProduto.findByPk(req.body.id);

      prod.nome = req.body.nome;
      prod.preco = req.body.preco;
      await prod.save();

      res.status(200).json(prod);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async getId(req, res) {
    try {
      const prod = await modelProduto.findByPk(req.body.id);

      res.status(200).json(prod);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async delete(req, res) {
    try {
      const prod = await modelProduto.findByPk(req.body.id);
      await prod.destroy();

      res.status(200).json({ mensagem: "Produto excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
