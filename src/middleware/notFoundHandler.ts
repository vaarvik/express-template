import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export function notFoundHandler(
    _req: Request,
    _res: Response,
    next: NextFunction
) {
    next(createError(404));
}
