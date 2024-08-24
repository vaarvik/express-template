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

const getUserById = async (id: string): Promise<User | undefined> => {
  return users.find(user => user.id === id);
};

export default getUserById;
