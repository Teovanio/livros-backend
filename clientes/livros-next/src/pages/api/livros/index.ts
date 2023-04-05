import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivros } from "../../../../classes/controle/ControleLivros";
import { Livro } from "../../../../classes/modelo/Livros";

export const controleLivros = new ControleLivros();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const livros: Livro[] = controleLivros.obterLivros();
      return res.status(200).json(livros);
    } else {
      if (req.method === "POST") {
        const livro: Livro = req.body;
        controleLivros.incluir(livro);
        return res.status(200).json({ sucesso: true });
      } else {
        return res.status(405).json({ error: "Não suportado" });
      }
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.toString() });
  }
}
