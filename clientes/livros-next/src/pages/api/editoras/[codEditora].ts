import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const nomeEditora: string = controleEditora.getNomeEditora(
        Number(req.query.codEditora)
      );

      return res.status(200).json(nomeEditora);
    } else {
      return res.status(405).json({ error: "Não permitido" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.toString() });
  }
}
