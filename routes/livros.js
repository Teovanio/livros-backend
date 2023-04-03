const { excluir, incluir, obterLivros } = require("../modelo/livro-dao");

var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
  const livros = await obterLivros();
  res.status(200).json(livros);
});

router.post("/", async (req, res) => {
  const livro = await incluir(req.body);
  res.status(201).json(livro);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const livro = await excluir(id);
  res.status(200).json(livro);
});

module.exports = router;
