import express from 'express';

import GravacoesController from '../controllers/GravacoesController';
import TabulacoesController from '../controllers/TabulacoesController';
import MatchingsController from '../controllers/MatchingsController';

import connectDB from '../config/db';

connectDB();

const routes = express.Router();

const gravacoesController = new GravacoesController();
const tabulacoesController = new TabulacoesController();
const matchingsController = new MatchingsController();

routes.post('/gravacao', gravacoesController.store);

routes.post('/tabulacao', tabulacoesController.store);

routes.get('/matchings', matchingsController.readAll);

routes.post('/matchings', matchingsController.store);

export default routes;
