const base = require("./baseJsonModel");
const FILE = "products.json";

exports.getAll = () => base.read(FILE);

exports.create = (product) => {
  const products = base.read(FILE);
  products.push(product);
  base.write(FILE, products);
};
