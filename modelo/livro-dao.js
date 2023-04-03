let Livro = require("./livro-schema");
obterLivros = async () => {
  return Livro.find();
};

incluir = async (livro) => {
  Livro.create(livro);
};

excluir = async (codigo) => {
  Livro.deleteOne({ _id: codigo });
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
};
