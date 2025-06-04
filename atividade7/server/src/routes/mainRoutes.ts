import { Router } from 'express';
import CidadeController from '../controllers/mainController';

const router = Router();

router.get('/cidade', CidadeController.getCidades);
router.get('/cidade/:id', CidadeController.getIncidente);

export default router;