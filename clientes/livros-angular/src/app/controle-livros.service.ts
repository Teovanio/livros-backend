import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    {
      titulo: 'As Crônicas de gelo e Fogo',
      resumo:
        'Há três argumentos principais na história, que se tornam cada vez mais interligados: a crônica de uma guerra civil dinástica entre várias famílias concorrentes pelo controle dos Sete Reinos; a ameaça crescente das criaturas sobrenaturais conhecidas como os Outros, que habitam além de uma imensa muralha de gelo ao Norte; e a ambição de Daenerys Targaryen, a filha exilada de um rei assassinado em uma outra guerra civil treze anos antes, prestes a voltar à sua terra e reivindicar seu trono de direito.',
      autores: ['George R.R. Martin'],
      codEditora: 32454,
      codigo: 1,
    },
    {
      titulo: 'o guia do mochileiro das galáxias',
      resumo:
        'Arthur Dent, um típico inglês que, num dia que pode ser considerado tudo menos típico, descobre não só que Ford Prefect, um de seus melhores e únicos amigos, é um extra-terrestre, mas também que a Terra está prestes a ser destruída pelos Vogons (uma raça alienígena extremamente burocrática e malquista em toda a Galáxia) para dar espaço a uma nova via intergaláctica.Com a ajuda de Ford, Arthur foge momentos antes da demolição do planeta, pegando carona clandestinamente em uma das espaçonaves Vogons.',
      autores: ['Douglas Adams'],
      codEditora: 45678,
      codigo: 2,
    },
    {
      titulo: 'Star Wars',
      resumo:
        'A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia.',
      autores: ['George Lucas'],
      codEditora: 98764,
      codigo: 3,
    },
  ];
  constructor() {}

  obterLivros = () => {
    console.log(this.livros);

    return this.livros;
  };
  incluir = (obj: Livro) => {
    let novoCodigo = 0;
    this.obterLivros().forEach((item) => {
      if (item.codigo! > novoCodigo) {
        novoCodigo = item.codigo!;
      }
    });
    novoCodigo++;
    obj.codigo = novoCodigo;
    this.livros.push(obj);
  };
  excluir = (codigo: number) => {
    console.log(this.livros);
    const index = this.obterLivros().findIndex((item) => {
      return item.codigo === codigo;
    });
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
    console.log(this.livros);
  };
}
