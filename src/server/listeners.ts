import http from 'http';

export function onError(
  error: NodeJS.ErrnoException,
  port: number | string,
): void {
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

export function onListening(
  server: http.Server,
  debugInstance: debug.IDebugger,
): void {
  const addr = server.address();
  if (!addr) throw new Error('Server address is not defined');

  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debugInstance('Listening on ' + bind);
}
