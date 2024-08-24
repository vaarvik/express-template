export default interface WebSocketClient<T> {
  /**
   * Sends a message through the WebSocket connection.
   * @param type - The type of the message being sent.
   * @param content - The content of the message.
   * @param userId - The ID of the user associated with the message.
   */
  sendRequest(_type: string, _content: Partial<T>): void;

  /**
   * Closes the WebSocket connection.
   */
  close(): void;

  /**
   * Sets up a handler for incoming messages of a specific type.
   * @param type - The type of messages to handle.
   * @param handler - The function to handle messages of the specified type.
   */
  onMessage(_type: string, _handler: (_content: Partial<T>) => void): void;
}
