import { NextFunction, Request, Response } from 'express';
import deleteUser from '../userServices/deleteUser';

const deleteUserRoute = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await deleteUser(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    next(error);
  }
};

export default deleteUserRoute;
