export type BaseModel = {
  id: string; // Unique identifier for the record
  createdAt: Date; // Timestamp when the record was created
  updatedAt: Date; // Timestamp when the record was last updated
  deletedAt?: Date; // Optional timestamp when the record was deleted (soft delete)
};
