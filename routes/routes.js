import {Router} from 'express';
import userRoutes from './userRoutes.js';
import loginRoutes from './loginRoutes.js';
import planDeAhorroRoutes from './planDeAhorroRoutes.js';
import gastoRoutes from './gastoRoutes.js';
import logoutRoutes from './logoutRoutes.js'


import User from '../Models/User.js';
import PlanDeAhorro from '../Models/PlanDeAhorro.js';
import Gasto from '../Models/Gasto.js';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/login', loginRoutes);
routes.use('/logout', logoutRoutes);
routes.use('/plan', planDeAhorroRoutes);
routes.use('/gastos', gastoRoutes);


export default routes;