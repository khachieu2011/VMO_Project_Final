import express from 'express'
//dotenv khoi tao bien moi truong
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import productRoutes from '../back-end/routers/productRouter.js'
import userRouters from '../back-end/routers/userRouter.js'
import orderRouters from '../back-end/routers/orderRouter.js'
import categoryRouters from '../back-end/routers/categoryRouter.js'

dotenv.config()

connectDB()

const app = express()

//accept dulieu json
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running ...')
})

app.use('/api/products' ,productRoutes)
app.use('/api/users' ,userRouters)
app.use('/api/orders', orderRouters)
app.use('/api/category', categoryRouters)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))