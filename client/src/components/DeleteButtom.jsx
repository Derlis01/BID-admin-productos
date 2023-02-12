import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const DeleteButtom = ({ id }) => {

    let navigate = useNavigate()

    const deleteProduct = async () => {
        try {
            const res = await axios.delete(`http://localhost:8000/delete/${id}`);
            console.log(res);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700" onClick={deleteProduct}>
          Eliminar
        </button>
  )
}

export default DeleteButtom