import { Request, Response } from "express";
import db from "./db";

export async function getLastContest(req: Request, res: Response) {
  try {
    const result = await db.query("SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1");
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: "Nenhum concurso da Mega-Sena encontrado." });
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("Erro ao buscar o último concurso:", e.message);
      res.status(500).json({ message: "Erro interno do servidor: " + e.message });
    } else {
      console.error("Erro desconhecido ao buscar o último concurso:", e);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export async function getSpecificContest(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const result = await db.query("SELECT * FROM megasena WHERE concurso = $1", [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: `Não existem dados do concurso ${id}` });
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`Erro ao buscar o concurso ${id}:`, e.message);
      res.status(500).json({ message: "Erro interno do servidor: " + e.message });
    } else {
      console.error(`Erro desconhecido ao buscar o concurso ${id}:`, e);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}