import { Router } from 'express';
import planDeAhorroController from '../Controllers/planDeAhorroController.js';


const planDeAhorroRoutes = Router();

planDeAhorroRoutes.get('/', planDeAhorroController.getAll);
planDeAhorroRoutes.get('/:id', planDeAhorroController.getById);
planDeAhorroRoutes.post('/', planDeAhorroController.create);
planDeAhorroRoutes.put('/:id', planDeAhorroController.update);
planDeAhorroRoutes.delete('/:id', planDeAhorroController.delete);

export default planDeAhorroRoutes;