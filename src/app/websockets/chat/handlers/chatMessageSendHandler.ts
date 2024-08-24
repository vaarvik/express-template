import { WebSocketResponse } from '@/lib/websocket/websocketTypes';
import createChatMessage from 'src/app/modules/chatMessage/chatMessageServices/createChatMessage';
import { ChatMessageCreateRequest } from 'src/app/modules/chatMessage/chatMessageTypes';

const chatMessageSendHandler = async (
  content: ChatMessageCreateRequest,
  sendResponse: (_type: string, _content: WebSocketResponse) => void,
): Promise<void> => {
  try {
    await createChatMessage(content);

    // Send an acknowledgment or response back
    const response: WebSocketResponse = {
      status: 'success',
      message: 'Message sent',
    };
    sendResponse('chat_message_send_response', response);
  } catch (error) {
    console.error('Error sending chat message:', error);
    const response: WebSocketResponse = {
      status: 'error',
      message: 'Failed to send message',
    };
    sendResponse('chat_message_send_response', response);
  }
};

export default chatMessageSendHandler;
