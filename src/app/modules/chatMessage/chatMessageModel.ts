import { BaseModel } from '@/lib/base-types/BaseModel';

export type ChatMessage = BaseModel & {
  senderId: string; // Unique identifier for the sender
  content: string; // The text content of the message
  readTimestamp?: Date; // Optional timestamp indicating when the message was read
};
