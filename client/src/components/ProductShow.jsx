import { Link } from "react-router-dom"
import DeleteButtom from "./DeleteButtom"
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
        <DeleteButtom id={prod._id} />
      </div>
    </div>
  )) : '' }
</div>
  ) 
}

export default ProductShow