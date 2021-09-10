import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import category from './data/categories.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import Product from './models/productModel.js'
import Category from './models/categoryModel.js'
import connectDB from './config/database.js'
import bcrypt from 'bcryptjs'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // await Product.deleteMany()
        await User.deleteMany()
        await Category.deleteMany()

        const createUser = await User.insertMany(users)
        console.log('user Imported')

        const adminUser = createUser[0]._id

        // const sampleProducts = products.map(product => {
        //     return { ...product, user: adminUser }
        // })

        const sampleCategories = category.map(category => {
            return { ...category, user: adminUser }
        })

        await Category.insertMany(sampleCategories)
        console.log('Category imported')

        // await Product.insertMany(sampleProducts)
        // console.log('Data Imported')

        process.exit()
    } catch (error) {
        console.error(`${error}`);
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Category.deleteMany()

        console.log('Data Destroyed')
        process.exit()
    } catch (error) {
        console.error(`${error}`);
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}