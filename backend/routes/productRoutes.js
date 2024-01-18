import express from "express";
import checkObjectId from "../middleware/checkObjectId.js";
import {
  createProduct,
  getProductById,
  getProducts,
  getTopProducts,
} from "../controllers/productController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.get("/top", getTopProducts);
router.route("/:id").get(checkObjectId, getProductById);

export default router;
