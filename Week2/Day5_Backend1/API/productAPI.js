
/*
Create product API with below operations
create new product ({productId,name,brand,price})
Read all product 
Real all product by brand
Update a product 
Delete a product id
*/
//Create mini express app
import exp from 'express'
const productApp = exp.Router()
const products=[]
productApp.get("/products",(req,res)=>{
    //read all products or filter by brand
    const { brand } = req.query
    if (brand) {
        const filtered = products.filter(p => String(p.brand).toLowerCase() === String(brand).toLowerCase())
        return res.json({message:`Products by brand "${brand}"`,payload:filtered})
    }

    res.json({message:"All products",payload:products})
})
productApp.get("/products/:id",(req,res)=>{
    //read product by id
    const productId = Number(req.params.id)
    const product = products.find(p => p.id === productId)
    if (!product) {
        return res.status(404).json({message:"Product not found"})
    }
    res.json({message:"Product found",payload:product})
})
productApp.post("/products",(req,res)=>{
    //create new product
    const newProduct = req.body
    products.push(newProduct)
    res.json({message:"Product created",payload:newProduct})
})
productApp.put("/products",(req,res)=>{
    //update a product
    const modifiedProduct = req.body
    const index = products.findIndex(p => p.id === modifiedProduct.id)
    if(index === -1){
        return res.status(404).json({message:"Product not found"})
    }
    products.splice(index,1,modifiedProduct)
    res.json({message:"Product updated",payload:modifiedProduct})
})
productApp.delete("/products/:id",(req,res)=>{
    //delete a product by id
    const productId = Number(req.params.id)
    const index = products.findIndex(p => p.id === productId)
    if(index === -1){
        return res.status(404).json({message:"Product not found"})
    }
    products.splice(index,1)
    res.json({message:"Product deleted"})
})
export {productApp}