import { WebSocketResponse } from '@/lib/websocket/websocketTypes';
import updateChatMessage from 'src/app/modules/chatMessage/chatMessageServices/updateChatMessage';
import { ChatMessageUpdateRequest } from 'src/app/modules/chatMessage/chatMessageTypes';

const chatMessageEditHandler = async (
  changedChatMessage: ChatMessageUpdateRequest,
  sendResponse: (_type: string, _content: WebSocketResponse) => void,
): Promise<void> => {
  try {
    await updateChatMessage(changedChatMessage);

    // Send an acknowledgment or response back
    const response: WebSocketResponse = {
      status: 'success',
      message: 'Message edited',
    };
    sendResponse('chat_message_edit_response', response);
  } catch (error) {
    console.error('Error editing chat message:', error);
    const response: WebSocketResponse = {
      status: 'error',
      message: 'Failed to update message',
    };
    sendResponse('chat_message_edit_response', response);
  }
};

export default chatMessageEditHandler;
