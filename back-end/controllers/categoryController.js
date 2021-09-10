import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

// @desc    Get all category
// @route   GET /api/categories
// @access  Private/Admin
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({})
    res.json(categories)
})

// @desc    Get category by Id
// @route   GET /api/categories/:id
// @access  Private/Admin
const getCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
    if (category) {
        res.json(category)
    }
    else {
        res.status(404).json({ mesage: 'Category not found' })
    }
})

// @desc    delete category 
// @route   DELETE /api/categories/:id
// @access  Private/Admin
const deleteCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
    if (category) {
        await category.remove()
        res.json({ message: 'Category removed' })
    }
    else {
        res.status(404).json({ mesage: 'Category not found' })
    }
})

// @desc    Create a category
// @route   POST /api/categories
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
    const category = new Category({
        name: 'Sample name',
        user: req.user._id
    })

    const createdCategory = await category.save()
    res.status(201).json(createdCategory)
})


// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
    } = req.body

    const category = await Category.findById(req.params.id)

    if (category) {
        category.name = name

        const updatedCategory = await category.save()
        res.json(updatedCategory)
    } else {
        res.status(404)
        throw new Error('Category not found')
    }
})
export { getCategories,getCategoryById, deleteCategoryById, createCategory,updateProduct }