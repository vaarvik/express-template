import { NextFunction, Request, Response } from 'express';
import getAllUsers from '../userServices/getAllUsers';

export const getAllUsersRoute = async (
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};
