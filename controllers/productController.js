// controllers/productController.js
import Product from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const images = req.files?.map((file) => file.filename) || [];

    const product = await Product.create({
      ...req.body,
      images,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create product" });
  }
};

/* UPDATE PRODUCT */
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const images = req.files?.map(file => file.filename);

    const updateData = {
      ...req.body,
    };

    if (images?.length) {
      updateData.images = images;
    }

    const product = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

/* DELETE PRODUCT */
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};

/* GET SINGLE PRODUCT */
const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

export default {
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct
}