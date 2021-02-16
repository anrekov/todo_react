import * as yup from 'yup'

export const validationSchema = yup.object().shape({
      login: yup.string().required('Please enter the login.'),
      password: yup
        .string()
        .min(3, 'Must be 3 or more symbols')
        .required('Please enter the password.'),
    });

export const validationSchemaReg = yup.object().shape({
  login: yup.string().required('Please enter the login.'),
  password: yup
    .string()
    .required('Please enter the password.')
    .min(3, 'Must be 3 or more symbols'),
  name: yup.string(),
  email: yup.string().email('Please enter the valid email.'),
  age: yup
    .number()
    .typeError('Its must be a number! ')
    .min(5, 'min age: 5')
    .max(100, 'max age: 100'),
});

export const validationSchemaInfo = yup.object().shape({
  login: yup.string().required('Please enter the login.'),
  password: yup
    .string()
    .required('Please enter the password.')
    .min(3, 'Must be 3 or more symbols'),
  name: yup.string(),
  email: yup.string().email('Please enter the valid email.'),
  age: yup
    .number()
    .typeError('Its must be a number! ')
    .min(5, 'min age: 5')
    .max(100, 'max age: 100'),
  edit: yup.bool(),
});
