import { Link } from "react-router-dom"
import './productShow.css'

const ProductShow = ({ product, deleteProduct }) => {

  

  return (
    <div className="container">
      <h3>Lista de Productos</h3>
       { product ? product.map((prod, idx) => <div className="flex" key={idx}>
          <div className="title">
            <Link to={`/product/${prod._id}`} key={idx}>{prod.title}</Link>
          </div>
          <div className="button">
            <button onClick={() => deleteProduct(prod._id)}>Eliminar Producto</button>
          </div>
       </div>) : '' }
    </div>
  ) 
}

export default ProductShow