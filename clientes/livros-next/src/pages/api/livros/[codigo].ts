import { NextApiRequest, NextApiResponse } from "next";
import { controleLivros } from ".";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "DELETE") {
      const codigoLivro: string | string[] | undefined = req.query.codigo;
      controleLivros.excluir(Number(codigoLivro));
      return res.status(200).json({ sucesso: true });
    } else {
      return res.status(405).json({ error: "Não permitido" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.toString() });
  }
}
