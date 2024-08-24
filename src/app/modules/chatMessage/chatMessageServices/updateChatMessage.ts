import { ChatMessage } from '../chatMessageModel';
import { ChatMessageUpdateRequest } from '../chatMessageTypes';

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

const updateChatMessage = async (
  changedMessage: ChatMessageUpdateRequest,
): Promise<ChatMessage | null> => {
  const messageIndex = chatMessages.findIndex(
    message => message.id === changedMessage.id,
  );

  if (messageIndex === -1) {
    return null; // Message not found
  }

  const updatedMessage = {
    ...chatMessages[messageIndex],
    ...changedMessage,
    updatedAt: new Date(),
  };

  chatMessages[messageIndex] = updatedMessage;

  return updatedMessage;
};

export default updateChatMessage;
