import express from 'express';
import userRoutes from './user/userRoutes';

export default function appRoutes(app: express.Application): void {
  app.use('/users', userRoutes);
}
