import React from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { login } from '../../service/UserService';
import { Formik } from 'formik';
import FormInput from '../FormInput';
import { validationSchema } from '../../Validators'

const Login = () => {
  const history = useHistory();

  const handleSubmit = (values) => {
    // todo call only login
    login({ username: values.login, password: values.password })
      .then((token) => {
        if (token.token) {
          localStorage.setItem('token', `Bearer ${token.token}`);
          history.push('/');
        } else {
          alert('Wrong username or password');
        }
      })
      .catch((err) => {
        console.log('im right here with err: ', err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        {({ isValid, handleSubmit, dirty }) => (
          <div className='formReg'>
            <FormInput param={'login'} />
            <FormInput param={'password'} />
            <button
              className='regBtn'
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type='submit'
            >
              Sign In
            </button>
            <button
              className='regBtn'
              type='button'
              onClick={() => {
                history.push('/register');
              }}
            >
              Register
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
