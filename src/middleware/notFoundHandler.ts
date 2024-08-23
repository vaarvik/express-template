import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

export function notFoundHandler(
  _req: Request,
  _res: Response,
  next: NextFunction,
): void {
  next(createError(404));
}
