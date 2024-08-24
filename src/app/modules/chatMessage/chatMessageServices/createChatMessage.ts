import { ChatMessage } from '../chatMessageModel';
import { ChatMessageCreateRequest } from '../chatMessageTypes';

let chatMessages: ChatMessage[] = [
  {
    id: '1',
    content: 'John Doe',
    senderId: '5',
    readTimestamp: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const createChatMessage = async (
  chatMessageData: ChatMessageCreateRequest,
): Promise<ChatMessage> => {
  const userId = '3'; // get current user ID
  const chatMessage = {
    ...chatMessageData,
    id: (chatMessages.length + 1).toString(),
    senderId: userId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  chatMessages.push(chatMessage);
  return chatMessage;
};

export default createChatMessage;
