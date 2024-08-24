import { NextFunction, Request, Response } from 'express';
import getUserById from '../userServices/getUserById';

const getUserByIdRoute = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
};

export default getUserByIdRoute;
