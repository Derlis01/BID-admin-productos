import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [productName, setProdcutName] = useState(""); 
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState("");
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/post', {
            title: productName,
            price: productPrice,
            description: productDescription
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange para actualizar firstName y lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name</label><br/>
                <input placeholder='Nombre' type="text" onChange = {(e)=>setProdcutName(e.target.value)} value={productName}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input placeholder='Precio' type="text" onChange = {(e)=>setProductPrice(e.target.value)} value={productPrice}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input placeholder='Descripcion' type="text" onChange = {(e)=>setProductDescription(e.target.value)} value={productDescription}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm