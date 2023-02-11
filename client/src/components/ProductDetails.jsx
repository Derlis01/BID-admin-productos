import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {

  const navigate = useNavigate()

  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const getData = async() => {
      let apiResponse = await axios.get(`http://localhost:8000/product/${id}`)
      setProduct(apiResponse.data)
    }
  
    getData()
  },[])

  const edit = () => {
    navigate(`/product/${id}/edit`)
  }
  

  return (
    <div>
        <h1>Detalles del Producto</h1>      
        <p>nombre: {product.title}</p>
        <p>Precio: {product.price}$</p>
        <p>Detalles: {product.description}</p>
        <button onClick={edit}>Editar</button>
    </div>
  )
}

export default ProductDetails