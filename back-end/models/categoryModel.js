import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
        //tham chieu den mo hinh user
    },
}, {
    timestamps: true
})

const Category = mongoose.model('Category', categorySchema)

export default Category
