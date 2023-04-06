let Livro = require("./livro-schema");
obterLivros = async () => {
  return Livro.find();
};

incluir = async (livro) => {
  Livro.create(livro);
};

excluir = async (codigo) => {
  const result = await Livro.deleteOne({ _id: codigo });
  if (result.deletedCount === 1) {
    console.log("Successfully deleted one document.");
  } else {
    console.log("No documents matched the query. Deleted 0 documents.");
  }
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
};
