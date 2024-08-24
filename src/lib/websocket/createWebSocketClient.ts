import WebSocketClient from './WebSocketClient.interface';
import { WebSocketHandler, WebSocketResponse } from './websocketTypes';

const createWebSocketClient = <T>(
  url: string,
  handlers: Record<string, WebSocketHandler<T>> = {},
): WebSocketClient<T> => {
  const ws = new WebSocket(url);

  const onMessage = (
    type: string,
    handler: (_content: Partial<T>) => void,
  ): void => {
    handlers[type] = handler;
  };

  const send = (type: string, content: object): void => {
    if (ws.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({ type, content });
      ws.send(message);
    } else {
      console.error('WebSocket is not connected');
    }
  };

  const sendRequest = (type: string, content: Partial<T>): void => {
    send(type, content);
  };

  const sendResponse = (type: string, content: WebSocketResponse): void => {
    send(type, content);
  };

  const handleMessage = (message: MessageEvent<string>): void => {
    try {
      const parsedMessage = JSON.parse(message.data.toString()) as {
        type: string;
        content: T;
        userId?: string;
      };
      const { type, content } = parsedMessage;

      if (handlers[type]) {
        handlers[type](content, sendResponse);
      } else {
        console.error('No handler for message type:', type);
      }
    } catch (error) {
      console.error('Error handling message:', error);
    }
  };

  const close = (): void => {
    if (ws) {
      ws.removeEventListener('message', handleMessage);
      ws.close();
    }
  };

  ws.addEventListener('message', handleMessage);

  return { sendRequest, close, onMessage };
};

export default createWebSocketClient;
