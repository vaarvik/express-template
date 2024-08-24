import { WebSocketResponse } from '@/lib/websocket/websocketTypes';
import updateChatMessageReadTimestamp from 'src/app/modules/chatMessage/chatMessageServices/updateChatMessageReadTimestamp';

const chatMessageReadHandler = async (
  { id }: { id: string },
  sendResponse: (_type: string, _content: WebSocketResponse) => void,
): Promise<void> => {
  try {
    await updateChatMessageReadTimestamp(id);

    // Send an acknowledgment or response back
    const response: WebSocketResponse = {
      status: 'success',
      message: 'Message read',
    };
    sendResponse('chat_message_read_response', response);
  } catch (error) {
    console.error('Error reading chat message:', error);
    const response: WebSocketResponse = {
      status: 'error',
      message: 'Failed to read message',
    };
    sendResponse('chat_message_read_response', response);
  }
};

export default chatMessageReadHandler;
