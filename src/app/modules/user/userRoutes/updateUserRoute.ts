import { NextFunction, Request, Response } from 'express';
import updateUser from '../userServices/updateUser';

const updateUserRoute = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await updateUser(req.params.id, req.body);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
};

export default updateUserRoute;
