import base from "./baseJsonModel.js";
const FILE = "products.json";

const getAll = () => base.read(FILE);

const create = (product) => {
  const products = base.read(FILE);
  products.push(product);
  base.write(FILE, products);
};

export default {
  getAll,
  create
}