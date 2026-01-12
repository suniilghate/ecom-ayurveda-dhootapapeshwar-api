const base = require("./baseJsonModel");

const FILE = "users.json";

exports.getAll = () => {
  return base.read(FILE);
};

exports.findByEmail = (email) => {
  const users = base.read(FILE);
  return users.find(u => u.email === email);
};

exports.create = (user) => {
  const users = base.read(FILE);
  users.push(user);
  base.write(FILE, users);
};
