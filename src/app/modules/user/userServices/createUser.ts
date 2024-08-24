import { User } from '../userModel';
import { UserCreateRequest } from '../userTypes';

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

const createUser = async (userData: UserCreateRequest): Promise<User> => {
  const newUser = {
    id: (users.length + 1).toString(),
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  users.push(newUser);
  return newUser;
};

export default createUser;
