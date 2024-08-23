// Dummy data or in a real application, this would interface with a database

type User = { id: string; name: string; email: string };

let users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
];

const getAllUsers = async (): Promise<User[]> => {
  return users;
};

const getUserById = async (id: string): Promise<User | undefined> => {
  return users.find(user => user.id === id);
};

const createUser = async (userData: {
  name: string;
  email: string;
}): Promise<User> => {
  const newUser = { id: (users.length + 1).toString(), ...userData };
  users.push(newUser);
  return newUser;
};

const updateUser = async (
  id: string,
  userData: { name?: string; email?: string },
): Promise<User | null> => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return null;
  users[userIndex] = { ...users[userIndex], ...userData };
  return users[userIndex];
};

const deleteUser = async (id: string): Promise<User | null> => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return null;
  const deletedUser = users.splice(userIndex, 1);
  return deletedUser[0];
};

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser };
