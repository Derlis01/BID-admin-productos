import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import './productShow.css'

const ProductShow = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
      const getData = async () => {
        let apiResponse = await axios.get('http://localhost:8000/get')
        setProduct(apiResponse.data)
      }

      getData()    
    },[])
    

  return (
    <div className="container">
      <h3>Lista de Productos</h3>
       { product ? product.map((prod, idx) => <div className="flex">
          <div className="title">
            <Link to={`/product/${prod._id}`} key={idx}>{prod.title}</Link>
          </div>
          <div className="button">
            <button>Eliminar</button>
          </div>
       </div>) : '' }
    </div>
  ) 
}

export default ProductShow