import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc Create new order
// @route POST /api/orders
// @access private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        itemPrice,
        shipPrice,
        totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Errow('No order items')
        return
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            itemPrice,
            shipPrice,
            totalPrice,
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

// @desc get order by ID
// @route GET /api/orders/:id
// @access private
const getOrderbyID = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Errow('Order not found')
    }
})

// @desc get logged in user order
// @route GET /api/orders/myorder
// @access private
const getMyOrders = asyncHandler(async (req, res) => {
    const order = await Order.find({ user: req.user._id })
    res.json(order)
})


// @desc GET all orders
// @route GET /api/orders
// @access private
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name')
    res.json(orders)
})

export { addOrderItems, getOrderbyID, getMyOrders, getOrders }