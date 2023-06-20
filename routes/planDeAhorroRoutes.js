import { Router } from 'express';
import controller from '../Controllers/planDeAhorroController.js';


const router = Router();

router.get('/user/:id_usuario', controller.getPlanByUserId);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.delete('/user/:id_usuario', controller.deleteByUserId);


export default router;