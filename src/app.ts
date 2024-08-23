// src/server.ts
import cookieParser from 'cookie-parser';
import debug from 'debug';
import express from 'express';
import http from 'http';
import logger from 'morgan';
import appRoutes from './app/routes';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import { normalizePort } from './server/helpers';
import { onError, onListening } from './server/listeners';

const debugInstance = debug('expresssolid:server');
const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Application routes
appRoutes(app);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Port and server setup
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', (error: NodeJS.ErrnoException) => onError(error, port));
server.on('listening', () => onListening(server, debugInstance));

export default app;
