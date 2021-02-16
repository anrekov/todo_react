import React from 'react';
import './Login/styles.css';
import { useHistory } from 'react-router-dom';
import { postUsers } from '../service/UserService';
import { Formik } from 'formik';
import FormInput from './FormInput'
import { validationSchemaReg } from '../Validators'

const Register = () => {
  let history = useHistory();

  const handleSubmit = (values) => {
    postUsers({
      username: values.login,
      password: values.password,
      name: values.name,
      email: values.email,
      age: values.age,
    })
      .then((res) => {
        // console.log(res.err);
        if (res.err) {
          alert('This user is already exists!');
        } else {
          history.push('/login');
        }
      })
      .catch((err) => console.log('err(register)', err));
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{
          login: '',
          password: '',
          name: '',
          email: '',
          age: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchemaReg}
      >
        {({ isValid, handleSubmit, dirty }) => (
          <div className="formReg">
            <FormInput param={'login'} />
            <FormInput param={'password'} />
            <FormInput param={'name'} />
            <FormInput param={'email'} />
            <FormInput param={'age'} />
            <button
              className="regBtn"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
            >
              Send
            </button>
            <button
              className="regBtn"
              type="button"
              onClick={() => {
                history.push('/login');
              }}
            >
              Back to login
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
