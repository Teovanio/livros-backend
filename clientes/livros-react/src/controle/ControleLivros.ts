import { Livro } from "../modelo/Livros";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
  _id: String | null;
  codEditora: number;
  titulo: String;
  resumo: String;
  autores: String[];
}

export class ControleLivros {
  obterLivros = async () => {
    var livros = [];
    livros = await fetch(baseURL)
      .then((result) => result.json())
      .then((livros) => {
        return livros.map((objeto: any) => {
          return objeto as Livro;
        });
      });

    return livros;
  };
  incluir = async (obj: LivroMongo) => {
    var x = JSON.stringify(obj);

    fetch(baseURL, {
      body: x,
      method: "POST",
      headers: { "content-type": "application/json" },
    }).then((data) => {
      console.log(data);
    });
  };
  excluir = async (codigo: String) => {
    fetch(baseURL + "/" + codigo, {
      method: "DELETE",
    }).then(() => {});
  };
}
