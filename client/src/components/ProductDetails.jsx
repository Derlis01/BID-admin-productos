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
  },[id])

  const edit = () => {
    navigate(`/product/${id}/edit`)
  }
  

  return (
    <div className="p-5 bg-gray-50">
        <h1 className="text-2xl font-bold mb-5">Detalles del Producto</h1>      
        <p className="text-lg">Nombre: {product.title}</p>
        <p className="text-lg">Precio: {product.price}$</p>
        <p className="text-lg mb-5">Detalles: {product.description}</p>
        <button className="bg-blue-500 p-2 text-white rounded" onClick={edit}>Editar</button>
</div>
  )
}

export default ProductDetails