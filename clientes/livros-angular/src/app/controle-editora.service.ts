import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[] = [
    {
      codEditora: 32454,
      nome: 'Leya',
    },
    {
      codEditora: 45678,
      nome: 'Arqueiro',
    },
    {
      codEditora: 98764,
      nome: 'DarkSide',
    },
  ];

  constructor() {}

  getEditoras = (): Editora[] => {
    return this.editoras;
  };

  getNomeEditora = (codEditora: number): string => {
    const retorno = this.getEditoras().filter((obj) => {
      return obj.codEditora === codEditora;
    });

    if (retorno.length > 0) {
      return retorno[0].nome!;
    } else {
      return 'Não encontrado';
    }
  };
}
