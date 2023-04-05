import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
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
        return livros.map((livro) => {
          return livro as Livro;
        });
      });

    return livros;
  };
  incluir = (obj: Livro) => {
    let novoCodigo = 0;
    this.obterLivros().forEach((item) => {
      if (item.codigo > novoCodigo) {
        novoCodigo = item.codigo;
      }
    });
    novoCodigo++;
    obj.codigo = novoCodigo;
    livros.push(obj);
  };
  excluir = async (codigo: String) => {
    fetch(baseURL + "/" + codigo, {
      method: "DELETE",
    }).then((result) => result.json());
    console.log(livros);
    const index = this.obterLivros().findIndex((item) => {
      return item.codigo === codigo;
    });
    if (index !== -1) {
      livros.splice(index, 1);
    }
    console.log(livros);
  };
}
