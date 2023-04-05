import { ControleEditora } from "../classes/controle/ControleEditora";
import { Livro } from "../classes/modelo/Livros";

export const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir(): void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
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
};
