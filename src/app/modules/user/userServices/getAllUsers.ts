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

const getAllUsers = async (): Promise<User[]> => {
  return users;
};

export default getAllUsers;
