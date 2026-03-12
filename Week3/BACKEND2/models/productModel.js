import { Schema, model } from 'mongoose'

// Create Product schema
//Add id and brand fields
const productSchema = new Schema({
    // Optional productId (unique) - avoids colliding with Mongoose internal `id` virtual
    productId: {
        type: Number,
        unique: [true, 'Product ID must be unique'],
    },
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
    },
    // Min price 10000 max price 50000
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [10000, 'Price must be >= 10000'],
        max: [50000, 'Price must be <= 50000'],
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        trim: true,
    },
}, {
    timestamps: true,
})

// Generate ProductModel
export const ProductModel = model('product', productSchema)
