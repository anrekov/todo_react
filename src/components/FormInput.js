import { ErrorMessage, Field } from 'formik';
import React from 'react';

const FormInput = (param) => {
  const par = `${param.param}`
  return (
    <p>
      <label htmlFor={par} style={{ textTransform: 'capitalize' }}>{par}</label>
      <ErrorMessage name={par} component="span" className="error" />
      <Field name={par}>
        {({ field }) => <input className="input" {...field}   type={ (par === 'password') ? 'password' : '' } />}
      </Field>
    </p>
  );
};

export default FormInput;
