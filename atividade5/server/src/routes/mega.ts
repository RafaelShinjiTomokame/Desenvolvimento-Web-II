import { Router } from "express";
import { last } from "../controllers/megaControlles";


const routes = Router();

routes.get("/", last);

export default routes;