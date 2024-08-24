import { ChatMessage } from '../chatMessageModel';

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

const deleteChatMessage = async (id: string): Promise<ChatMessage | null> => {
  const chatMessageIndex = chatMessages.findIndex(
    chatMessage => chatMessage.id === id,
  );
  if (chatMessageIndex === -1) return null;
  const deletedUser = chatMessages.splice(chatMessageIndex, 1);
  return deletedUser[0];
};

export default deleteChatMessage;
