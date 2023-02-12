import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {

    const { id } = useParams();
    const [newname, setNewName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/product/${id}`)
            .then(res => {
                setNewName(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/product/${id}/edit`, {
            title: newname,
            price: price,
            description: description
        })
            .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Actualizar Producto</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Nuevo nombre</label><br />
                    <input type="text" 
                    name="newname" 
                    value={newname} 
                    onChange={(e) => { setNewName(e.target.value) }} />
                </p>
                <p>
                    <label>Precio</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Descripcion</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
                <button onClick={deleteProduct}>Eliminar Producto</button>
            </form>
        </div>
    )
}

export default ProductUpdate;