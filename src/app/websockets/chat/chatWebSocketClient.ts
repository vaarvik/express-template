import createWebSocketClient from '@/lib/websocket/createWebSocketClient';
import { ChatMessage } from 'src/app/modules/chatMessage/chatMessageModel';
import {
  ChatMessageCreateRequest,
  ChatMessageUpdateRequest,
} from 'src/app/modules/chatMessage/chatMessageTypes';
import chatMessageDeleteHandler from './handlers/chatMessageDeleteHandler';
import chatMessageEditHandler from './handlers/chatMessageEditHandler';
import chatMessageReadHandler from './handlers/chatMessageReadHandler';
import chatMessageSendHandler from './handlers/chatMessageSendHandler';

// Define the handlers for chat messages
const handlers = {
  chat_message_send: chatMessageSendHandler,
  chat_message_delete: chatMessageDeleteHandler,
  chat_message_edit: chatMessageEditHandler,
  chat_message_read: chatMessageReadHandler,
};

const chatWebSocketClientInst = createWebSocketClient<ChatMessage>(
  'ws://localhost:8080',
  handlers,
);

const sendChatMessage = (newMessage: ChatMessageCreateRequest): void => {
  chatWebSocketClientInst.sendRequest('chat_message_send', newMessage);
};

const deleteChatMessage = (messageId: string): void => {
  chatWebSocketClientInst.sendRequest('chat_message_delete', { id: messageId });
};

const editChatMessage = (changedMessage: ChatMessageUpdateRequest): void => {
  chatWebSocketClientInst.sendRequest('chat_message_edit', changedMessage);
};

const readChatMessage = (messageId: string): void => {
  chatWebSocketClientInst.sendRequest('chat_message_read', { id: messageId });
};

export default {
  sendChatMessage,
  deleteChatMessage,
  editChatMessage,
  readChatMessage,
};
