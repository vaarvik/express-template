import { User } from '../userModel';

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

const deleteUser = async (id: string): Promise<User | null> => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return null;
  const deletedUser = users.splice(userIndex, 1);
  return deletedUser[0];
};

export default deleteUser;
