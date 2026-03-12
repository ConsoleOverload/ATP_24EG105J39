import exp from 'express'
import { Types } from 'mongoose'
import { ProductModel } from '../models/productModel.js'

export const productApp = exp.Router()

// Create new product
productApp.post('/products', async (req, res) => {
    try {
        const newProduct = req.body
        const newProductDocument = new ProductModel(newProduct)
        await newProductDocument.save()

        res.status(201).json({ message: 'Product created', product: newProductDocument })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Read all products
productApp.get('/products', async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
//Read a product by id
productApp.get('/products/:id', async (req, res) => {
    try {
        const pid = req.params.id
        const query = Types.ObjectId.isValid(pid)
            ? { _id: pid }
            : { productId: Number(pid) }

        const productObj = await ProductModel.findOne(query)

        if (!productObj) {
            return res.status(404).json({ message: 'Product not found' })
        }
        return res.status(200).json({ message: 'Product', payload: productObj })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
//Update a product by id
productApp.put('/products/:id', async (req, res) => {
    try {
        const modifiedProduct = req.body
        const pid = req.params.id
        const query = Types.ObjectId.isValid(pid)
            ? { _id: pid }
            : { productId: Number(pid) }

        const updatedProduct = await ProductModel.findOneAndUpdate(
            query,
            { $set: { ...modifiedProduct } },
            { new: true, runValidators: true }
        )

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' })
        }
        return res.status(200).json({ message: 'Product Modified', payload: updatedProduct })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
//Delete a product by id
productApp.delete('/products/:id', async (req, res) => {
    try {
        const pid = req.params.id
        const query = Types.ObjectId.isValid(pid)
            ? { _id: pid }
            : { productId: Number(pid) }

        const deletedProduct = await ProductModel.findOneAndDelete(query)
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' })
        }
        return res.status(200).json({ message: 'Product deleted', payload: deletedProduct })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})