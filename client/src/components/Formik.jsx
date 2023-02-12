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
      <form onSubmit={handleSubmit}>
        {fields.map(field => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <Field name={field.name} type={field.type} />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    )}
  </Formik>
);

export default ReusableForm;