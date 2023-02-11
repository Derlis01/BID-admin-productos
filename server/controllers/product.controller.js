import { Product } from '../models/product.model.js'


export const postProducts = async (req, res) => {
    try {
        const newProduct = await Product(req.body)
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    }
    catch (err) {
        res.status(400).json({error: err})
    }
}   

export const getProducts = async (req, res) => {
    try{
        const allProductos = await Product.find()
        res.json(allProductos)
    }
    catch (err) {
        res.status(400).json({error: err})
    }
}

export const getProductById = async (req, res) => {
    try{
        const newProduct = await Product.findById(req.params.id)
        res.status(200).json(newProduct)
        if(!newProduct) {
            res.status(404).json({error: 'Producto no encontrado'})
        }
    }
    catch (err) {
        console.error(err)
    }
}

export const editProductById = async (req, res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updatedProduct)
        if(!updatedProduct) {
            res.status(404).json({error: 'Producto no encontrado'})
        }
    }
    catch (err) {
        console.error(err)
    }
}

export const deleteProduct = async (req, res) => {

    try{
        const deletedProduct = await Product.findByIdAndDelete( req.params.id )
        res.status(200).json(deletedProduct)

        if(!deletedProduct) {
            res.status(404).json({error: 'Producto no encontrado'})
            }
            
    }
    catch (err) {
        console.err(err)
    }
}