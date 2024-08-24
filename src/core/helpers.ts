export function normalizePort(val: string): number | string {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val; // named pipe
  if (port >= 0) return port; // port number
  throw new Error('Invalid port');
}
