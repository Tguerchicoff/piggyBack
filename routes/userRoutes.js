import {Router} from 'express';
import controller from '../Controllers/userController.js';

const router = Router();

router.get('/', controller.getAllUsers);
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);
router.get("/:id", controller.getUserById);

export default router;