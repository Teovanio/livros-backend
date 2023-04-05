import { Editora } from "../modelo/Editora";

let editoras: Editora[] = [
  {
    codEditora: 1,
    nome: "Leya",
  },
  {
    codEditora: 2,
    nome: "Arqueiro",
  },
  {
    codEditora: 3,
    nome: "DarkSide",
  },
];

export class ControleEditora {
  getEditoras = (): Editora[] => {
    return editoras;
  };
  getNomeEditora = (codEditora: number) => {
    const retorno = this.getEditoras().filter((obj) => {
      return obj.codEditora === codEditora;
    });

    if (retorno.length > 0) {
      return retorno[0].nome;
    } else {
      return "Não encontrado";
    }
  };
}
