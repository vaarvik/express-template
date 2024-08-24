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

const updateChatMessageReadTimestamp = async (
  id: string,
): Promise<ChatMessage | null> => {
  const messageIndex = chatMessages.findIndex(message => message.id === id);

  if (messageIndex === -1) {
    return null; // Message not found
  }

  chatMessages[messageIndex].readTimestamp = new Date();
  chatMessages[messageIndex].updatedAt = new Date();

  return chatMessages[messageIndex];
};

export default updateChatMessageReadTimestamp;
