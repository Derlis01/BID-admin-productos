import React from 'react';
import { Field, Formik } from 'formik';

const ReusableForm = ({ fields, initialValues, validationSchema, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm(initialValues);
    }}
  >
    {({ handleSubmit }) => (
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        {fields.map(field => (
          <div key={field.name}>
            <label className="block font-medium" htmlFor={field.name}>{field.label}</label>
            <Field className="border border-gray-400 p-2 w-full" name={field.name} type={field.type} />
          </div>
        ))}
        <button className="bg-blue-500 text-white py-1.5 px-3 mt-3 rounded hover:bg-blue-700" type="submit">Submit</button>
      </form>
    )}
  </Formik>
);

export default ReusableForm;