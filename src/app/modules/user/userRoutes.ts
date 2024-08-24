import express from 'express';
import { getAllUsersRoute } from './userRoutes/getAllUsersRoute';
import getUserByIdRoute from './userRoutes/getUserByIdRoute';
import createUserRoute from './userRoutes/createUserRoute';
import updateUserRoute from './userRoutes/updateUserRoute';
import deleteUserRoute from './userRoutes/deleteUserRoute';

const router = express.Router();

router.get('/', getAllUsersRoute);
router.get('/:id', getUserByIdRoute);
router.post('/', createUserRoute);
router.put('/:id', updateUserRoute);
router.delete('/:id', deleteUserRoute);

export default router;
