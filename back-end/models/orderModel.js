import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.ObjectId,
                required: true,
                ref: 'Product'
            },
        },
    ],
    shippingAddress: {
        address: { type: String, required: true },
        phoneNumber: { type: Number, required: true },
        node: { type: String, required: true },
        name: { type: String, required: true },
        delivery: { type: String, required: true },
    },
    itemPrice: { type: Number, required: true },
    shipPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

export default Order