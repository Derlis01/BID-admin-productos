import { Router } from "express";
const route = Router()
import { postProducts, getProducts, getProductById, deleteProduct, editProductById } from "../controllers/product.controller.js";

route.post('/post', postProducts)
route.get('/get', getProducts)
route.put('/product/:id/edit', editProductById)
route.get('/product/:id', getProductById)
route.delete('/delete/:id', deleteProduct)

export default route