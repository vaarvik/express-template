import { NextFunction, Request, Response } from 'express';
import createUser from '../userServices/createUser';

const createUserRoute = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export default createUserRoute;
