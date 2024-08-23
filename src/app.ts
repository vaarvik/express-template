// src/server.ts
import cookieParser from 'cookie-parser';
import debug from 'debug';
import express from 'express';
import http from 'http';
import logger from 'morgan';
import appRoutes from './app/routes';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';

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
server.on('error', error => onError(error, port));
server.on('listening', () => onListening(server, debugInstance));

export default app;

function normalizePort(val: string): number | string {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val; // named pipe
  if (port >= 0) return port; // port number
  throw new Error('Invalid port');
}

function onError(error: NodeJS.ErrnoException, port: number | string): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening(
  server: http.Server,
  debugInstance: debug.IDebugger,
): void {
  const addr = server.address();
  if (!addr) throw new Error('Server address is not defined');

  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debugInstance('Listening on ' + bind);
}
