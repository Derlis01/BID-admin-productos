import React, { useEffect, useState } from "react";
import Formik from "./Formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fields = [
  { name: "title", label: "Producto", type: "text" },
  { name: "price", label: "Precio", type: "number" },
  { name: "description", label: "Descripcion", type: "text" },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("El nombre es requerido"),
  price: Yup.number().required("El precio es requerido"),
  description: Yup.string().required("La descripcion es requerida"),
});

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [initialValues, setInitialValue] = useState({
    title: "",
    price: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/product/${id}`);
        setInitialValue({
          title: res.data.title,
          price: res.data.price,
          description: res.data.description,
        });
        setIsLoading(false);
        console.log('loop2')
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [id]);


  const updateProduct = async ({ title, price, description }) => {
    try {
      const res = await axios.put(`http://localhost:8000/product/${id}/edit`, {
        title: title,
        price: price,
        description: description,
      });
      console.log(res);
      navigate(`/product/${id}`)
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Formik
        fields={fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          updateProduct(values);
        }}
      />
    </div>
  );
};

export default UpdateForm;
