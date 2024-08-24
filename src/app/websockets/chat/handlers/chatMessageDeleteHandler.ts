import { WebSocketResponse } from '@/lib/websocket/websocketTypes';
import deleteChatMessage from 'src/app/modules/chatMessage/chatMessageServices/deleteChatMessage';

const chatMessageDeleteHandler = async (
  { id }: { id: string },
  sendResponse: (_type: string, _content: WebSocketResponse) => void,
): Promise<void> => {
  try {
    await deleteChatMessage(id);

    // Send an acknowledgment or response back
    const response: WebSocketResponse = {
      status: 'success',
      message: 'Message deleted',
    };
    sendResponse('chat_message_delete_response', response);
  } catch (error) {
    console.error('Error deleteing chat message:', error);
    const response: WebSocketResponse = {
      status: 'error',
      message: 'Failed to update message',
    };
    sendResponse('chat_message_delete_response', response);
  }
};

export default chatMessageDeleteHandler;
