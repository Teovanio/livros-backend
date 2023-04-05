import { Livro } from "../modelo/Livros";

const livros: Livro[] = [
  {
    titulo: "As Crônicas de gelo e Fogo",
    resumo:
      "Há três argumentos principais na história, que se tornam cada vez mais interligados: a crônica de uma guerra civil dinástica entre várias famílias concorrentes pelo controle dos Sete Reinos; a ameaça crescente das criaturas sobrenaturais conhecidas como os Outros, que habitam além de uma imensa muralha de gelo ao Norte; e a ambição de Daenerys Targaryen, a filha exilada de um rei assassinado em uma outra guerra civil treze anos antes, prestes a voltar à sua terra e reivindicar seu trono de direito.",
    autores: ["George R.R. Martin"],
    codEditora: 1,
    codigo: 1,
  },
  {
    titulo: "o guia do mochileiro das galáxias",
    resumo:
      "Arthur Dent, um típico inglês que, num dia que pode ser considerado tudo menos típico, descobre não só que Ford Prefect, um de seus melhores e únicos amigos, é um extra-terrestre, mas também que a Terra está prestes a ser destruída pelos Vogons (uma raça alienígena extremamente burocrática e malquista em toda a Galáxia) para dar espaço a uma nova via intergaláctica.Com a ajuda de Ford, Arthur foge momentos antes da demolição do planeta, pegando carona clandestinamente em uma das espaçonaves Vogons.",
    autores: ["Douglas Adams"],
    codEditora: 2,
    codigo: 2,
  },
  {
    titulo: "Star Wars",
    resumo:
      "A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia.",
    autores: ["George Lucas"],
    codEditora: 3,
    codigo: 3,
  },
];

export class ControleLivros {
  obterLivros = () => {
    console.log(livros);

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
  excluir = (codigo: number) => {
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
