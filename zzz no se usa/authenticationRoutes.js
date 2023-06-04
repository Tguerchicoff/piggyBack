import { Router } from 'express';
import controller from '../Controllers/AuthenticationController.js';


const router = Router();

router.get('/', controller.login);
router.get('/:id', controller.logout);
router.post('/signup', controller.register);

export default router;