import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "../../../../classes/controle/ControleEditora";
import { Editora } from "../../../../classes/modelo/Editora";

export const controleEditora = new ControleEditora();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const editoras: Editora[] = controleEditora.getEditoras();

      return res.status(200).json(editoras);
    } else {
      return res.status(405).json({});
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.toString() });
  }
}
