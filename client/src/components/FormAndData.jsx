import Formik from './Formik';
import ProductShow from './ProductShow';
import * as Yup from 'yup';
import axios from 'axios';
import { useState, useEffect } from 'react';

const fields = [
  { name: 'title', label: 'Producto', type: 'text' },
  { name: 'price', label: 'Precio', type: 'number' },
  { name: 'description', label: 'Descripcion', type: 'text' },
];

const initialValues = {
  title: '',
  price: '',
  description: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('El nombre es requerido'),
  price: Yup.number().required('El precio es requerido'),
  description: Yup.string().required('La descripcion es requerida'),
});


const FormAndData = () => {

  const [products, setProducts] = useState([]);
  const [deleted, setDeleted] = useState(1)

  async function postData({title, price, description}) {
    try {
        const res = await axios.post('http://localhost:8000/post', {
            title: title,
            price: price,
            description: description
        });
        console.log(res);
        setDeleted(deleted + 1)
    } catch (err) {
        console.log(err);
    }
  }

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/delete/${id}`);
      console.log(res);
      setDeleted(deleted + 1)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:8000/get');
      setProducts(res.data);
    }
    fetchData();
  }, [deleted]);


  return (
    <div>
        <Formik 
        fields={fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          postData(values)
        }} />
        <ProductShow product={products} deleteProduct={deleteProduct} />
    </div>
  )
}

export default FormAndData