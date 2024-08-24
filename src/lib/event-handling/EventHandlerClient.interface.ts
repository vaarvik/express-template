export default interface EventHandlerClient<T> {
  /**
   * Connects to the event streaming system.
   * @returns A promise that resolves when the connection is established.
   */
  connect(): Promise<void>;

  /**
   * Disconnects from the event streaming system.
   * @returns A promise that resolves when the disconnection is complete.
   */
  disconnect(): Promise<void>;

  /**
   * Sends a message to a specified destination.
   * @param destination - The destination (e.g., topic, channel, queue) to send the message to.
   * @param message - The message to send.
   * @returns A promise that resolves when the message is successfully sent.
   */
  sendMessage(_destination: string, _message: T): Promise<void>;

  /**
   * Subscribes to a destination to receive messages.
   * @param destination - The destination (e.g., topic, channel, queue) to subscribe to.
   * @param callback - The callback function to handle received messages.
   * @returns A promise that resolves when the subscription is successful.
   */
  subscribe(
    _destination: string,
    _callback: (_message: T) => void,
  ): Promise<void>;

  /**
   * Unsubscribes from a destination.
   * @param destination - The destination (e.g., topic, channel, queue) to unsubscribe from.
   * @returns A promise that resolves when the unsubscription is successful.
   */
  unsubscribe(_destination: string): Promise<void>;

  /**
   * Handles errors related to message sending or receiving.
   * @param error - The error that occurred.
   */
  handleError(_error: Error): void;
}
