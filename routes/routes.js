import {Router} from 'express';
import userRoutes from './userRoutes.js';
import loginRoutes from './loginRoutes.js';
import planDeAhorroRoutes from './planDeAhorroRoutes.js';
import User from '../Models/User.js';
import PlanDeAhorro from '../Models/PlanDeAhorro.js';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/login', loginRoutes);
routes.use('/plan', planDeAhorroRoutes);


export default routes;