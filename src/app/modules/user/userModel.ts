import { BaseModel } from '@/lib/base-types/BaseModel';

export type User = BaseModel & { name: string; email: string };
