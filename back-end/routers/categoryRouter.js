import express from 'express'
const router = express.Router()
import { getCategories, getCategoryById, deleteCategoryById, createCategory, updateProduct } from '../controllers/categoryController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getCategories).post(protect, admin, createCategory)
router.route('/:id').get(getCategoryById).delete(protect, admin, deleteCategoryById).put(protect, admin, updateProduct)

export default router     