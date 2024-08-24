export type WebSocketHandler<T> = (
  _content: T,
  _sendResponse: (_type: string, _content: WebSocketResponse) => void,
) => void;

export type WebSocketResponse = {
  status: 'success' | 'error';
  message: string;
};
