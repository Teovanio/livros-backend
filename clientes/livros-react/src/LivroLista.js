import { ControleEditora } from "./controle/ControleEditora";
import { ControleLivros } from "./controle/ControleLivros";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function LivroLista() {
  const controleLivros = new ControleLivros();
  const controleEditora = new ControleEditora();

  const [carregado, setCarregado] = useState(false);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    controleLivros.obterLivros().then((dados) => {
      setLivros(dados);

      setCarregado(true);
    });
  }, [carregado]);

  const excluir = (codLivro) => {
    controleLivros.excluir(codLivro).then(() => {
      setCarregado(false);
    });
  };

  return (
    <main className="estilo-dados">
      <h1>Catálogo de Livros</h1>
      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>titulo</th>
            <th>resumo</th>
            <th>editora</th>
            <th>autores</th>
          </tr>
        </thead>
        <tbody>
          {carregado ? (
            livros.map((l, index) => (
              <LinhaLivro
                livro={l}
                excluir={() => {
                  excluir(l._id);
                }}
                key={index}
              ></LinhaLivro>
            ))
          ) : (
            <tr>
              <th scope="row"></th>
              <td>Ainda estamos carregando</td>
              <td> </td>
              <td></td>
            </tr>
          )}

          {carregado && livros.length === 0 && (
            <tr>
              <td></td>
              <td>Não existem mais livros</td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </Table>
    </main>
  );
}

function LinhaLivro(props) {
  const controleEditora = new ControleEditora();

  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
      <td>
        {props.livro.titulo}
        <br />
        <button
          onClick={() => {
            props.excluir();
          }}
        >
          Excluir
        </button>
      </td>
      <td>{props.livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {props.livro.autores.map((autor, i) => {
            return <li key={i}>{autor}</li>;
          })}
        </ul>
      </td>
    </tr>
  );
}
export default LivroLista;
