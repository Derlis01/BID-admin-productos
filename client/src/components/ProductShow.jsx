import { Link } from "react-router-dom"
import './productShow.css'

const ProductShow = ({ product, deleteProduct }) => {

  

  return (
    <div className="container p-6">
  <h3 className="text-lg font-medium">Lista de Productos</h3>
  { product ? product.map((prod, idx) => (
    <div className="flex items-center my-4" key={idx}>
      <div className="flex-1">
        <Link to={`/product/${prod._id}`} key={idx} className="text-blue-500 hover:text-blue-800">
          {prod.title}
        </Link>
      </div>
      <div>
        <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700" onClick={() => deleteProduct(prod._id)}>
          Eliminar
        </button>
      </div>
    </div>
  )) : '' }
</div>
  ) 
}

export default ProductShow