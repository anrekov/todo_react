import { ErrorMessage, Field } from 'formik';
import React from 'react';

export const InfoItem = (param) => {
  const par = `${param.param}`;
  return (
    <p>
      <label htmlFor={par} style={{ textTransform: 'capitalize' }}>
        {par}
      </label>
      <ErrorMessage name={par} component="span" className="error" />
      <Field name={par}>
        {({ field }) => (
          <input
            className="input"
            {...field}
            type={par === 'password' ? 'password' : 'text'}
          />
        )}
      </Field>
    </p>
  );
};

export const ShowItem = (params) => {
  const par = `${params.param}`;
  return (
    <p>
      <label
        htmlFor={par}
        style={{ textTransform: 'capitalize' }}
      >{`${par}: `}</label>
      <span>{params.data}</span>
    </p>
  );
};
