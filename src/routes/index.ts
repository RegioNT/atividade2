import { Router } from 'express';
import vinhoRouter from './vinho.routes';

const routes = Router();

routes.use('./vinhos', vinhoRouter);

export default routes;
