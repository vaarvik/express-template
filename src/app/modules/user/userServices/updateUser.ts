import { User } from '../userModel';
import { UserUpdateRequest } from '../userTypes';

let users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const updateUser = async (
  id: string,
  userData: UserUpdateRequest,
): Promise<User | null> => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return null;
  users[userIndex] = { ...users[userIndex], ...userData };
  return users[userIndex];
};

export default updateUser;
