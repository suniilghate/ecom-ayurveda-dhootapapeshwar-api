// routes/productRoutes.js
import express from "express";
import productController from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";

const {
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  fetchProducts
} = productController;

const router = express.Router();

router.get("/", fetchProducts);
router.post("/add", protect, upload.array("images", 5), addProduct);
router.get("/:id", protect, getProduct);
router.put("/:id", protect, upload.array("images", 5), updateProduct);
router.delete("/:id", protect, deleteProduct);

export default router;
