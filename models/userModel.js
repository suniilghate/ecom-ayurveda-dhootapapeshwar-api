import base from "./baseJsonModel.js";

const FILE = "users.json";

const getAll = () => {
  return base.read(FILE);
};

const findByEmail = (email) => {
  const users = base.read(FILE);
  return users.find(u => u.email === email);
};

const create = (user) => {
  const users = base.read(FILE);
  users.push(user);
  base.write(FILE, users);
};

export default {
  getAll,
  findByEmail,
  create
};
