import {Router} from 'express';
import { logout } from '../Controllers/logoutController.js';

const router = Router();

router.post('/', logout);

export default router;