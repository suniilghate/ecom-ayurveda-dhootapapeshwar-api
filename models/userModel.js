import base from "./baseJsonModel.js";

const FILE = "users.json";

const getAll = () => {
  return base.read(FILE, initialUsers);
};

const findByEmail = (email) => {
  const users = base.read(FILE, initialUsers);
  return users.find(u => u.email === email);
};

const create = (user) => {
  const users = base.read(FILE, initialUsers);
  users.push(user);
  base.write(FILE, users);
};

// Initial sample users
const initialUsers = [
  {
    id: 1700000000001,
    name: "Sunil Ghate",
    email: "sunil@example.com",
    password: "$2a$10$XQq3fV8z2wY8bK7H6nJYgO5nO9gXn5j9W5Zc0k5sPqzG8bQZlXQ2a",
    createdAt: "2025-01-10T08:30:00.000Z",
  },
  {
    id: 1700000000002,
    name: "Admin User",
    email: "admin@example.com",
    password: "$2a$10$XQq3fV8z2wY8bK7H6nJYgO5nO9gXn5j9W5Zc0k5sPqzG8bQZlXQ2a",
    createdAt: "2025-01-11T10:15:00.000Z",
  },
];

export default {
  getAll,
  findByEmail,
  create
};
