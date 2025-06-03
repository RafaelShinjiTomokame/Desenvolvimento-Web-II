import { Router } from "express";
import { getLastContest, getSpecificContest } from "../controllers/MegaController";

const routes = Router();

// Rota para retornar o concurso mais recente
routes.get("/megasena", getLastContest); // localhost:3001/ [cite: 8]

// Rota para retornar os dados de um concurso específico, identificado pelo número
routes.get("/megasena/:id", getSpecificContest); // localhost:3001/2848 [cite: 10]

export default routes;