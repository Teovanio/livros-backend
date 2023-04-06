import { ControleEditora } from "./controle/ControleEditora";
import { ControleLivros } from "./controle/ControleLivros";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Livro } from "./modelo/Livros";
import { Button, Form, FormLabel } from "react-bootstrap";

function LivroDados() {
  var controleLivro = new ControleLivros();
  var controleEditora = new ControleEditora();

  var opcoes = controleEditora.getEditoras().map((editora) => {
    return {
      value: editora.codEditora,
      text: editora.nome,
    };
  });
  const [titulo, setTitulo] = useState("");
  const [livros, setLivros] = useState([]);
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const navigate = useNavigate();

  var tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  var incluir = (evento) => {
    evento.preventDefault();
    var livro = new Livro();
    livro._id = null;
    livro.codigo = "";
    livro.codEditora = codEditora;
    livro.titulo = titulo;
    livro.resumo = resumo;
    livro.autores = autores.split("\n");

    controleLivro.incluir(livro).then(() => {
      navigate("/");
    });
  };

  var handleSetAutores = (evento) => {
    setAutores(evento.target.value);
  };

  var handleSetTitulo = (evento) => {
    setTitulo(evento.target.value);
  };

  var handleSetResumo = (evento) => {
    setResumo(evento.target.value);
  };

  return (
    <main className="estilo-dados">
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <Form.Group className="mb-3 ">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" value={titulo} onChange={handleSetTitulo} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Resumo</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={resumo}
            onChange={handleSetResumo}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Editora</Form.Label>
          <Form.Select onChange={tratarCombo} value={codEditora}>
            {opcoes.map((editora, i) => {
              return (
                <option value={editora.value} key={i}>
                  {editora.text}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Autores(1 por linha)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={autores}
            onChange={handleSetAutores}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Salvar Dados
        </Button>
      </form>
    </main>
  );
}
export default LivroDados;
