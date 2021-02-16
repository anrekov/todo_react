import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { userInfo, editInfo } from '../service/UserService';
import { InfoItem, ShowItem } from './InfoItem';
import { Formik } from 'formik';
import { validationSchemaInfo } from '../Validators';

const UserInfo = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    login: 'guest',
    password: '',
    name: '',
    email: '',
    age: '',
  });

  useEffect(() => {
    userInfo().then((result) => {
      setFormData({
        login: result.username,
        password: result.password,
        name: result.name,
        email: result.email,
        age: result.age,
      });
    });
  }, []);

  const handleSubmit = (values) => {
    editInfo({
      username: values.login,
      password: values.password,
      name: values.name,
      email: values.email,
      age: values.age,
    }).then(() => {
      history.push('/user');
    });
  };

  return (
    <div>
      <nav>
        <NavLink to="/" activeClassName="activeNav">
          Todo List
        </NavLink>
        <NavLink to="/user" activeClassName="activeNav">
          Your profile
        </NavLink>
      </nav>
      <h2>User Info</h2>
      <Formik
        initialValues={{
          login: '',
          password: '',
          name: '',
          email: '',
          age: '',
          edit: false,
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchemaInfo}
      >
        {({
          isValid,
          handleSubmit,
          handleChange,
          handleBlur,
          dirty,
          values,
        }) => (
          <div className="formReg">
            <p>
              <input
                type="checkbox"
                name="edit"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.edit}
              />
              <label htmlFor="edit">Edit</label>
            </p>

            {values.edit && (
              <>
                <InfoItem param={'login'} />
                <InfoItem param={'password'} />
                <InfoItem param={'name'} />
                <InfoItem param={'email'} />
                <InfoItem param={'age'} />
              </>
            )}
            {!values.edit && (
              <>
                <ShowItem param={'login'} data={formData['login']} />
                <ShowItem param={'password'} data={formData['password']} />
                <ShowItem param={'name'} data={formData['name']} />
                <ShowItem param={'email'} data={formData['email']} />
                <ShowItem param={'age'} data={formData['age']} />
              </>
            )}

            <button
              className="regBtn"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
            >
              Send
            </button>
            {/* <button
              name='edit'
              onClick={(values) => {values.edit = !values.edit}}
            >
            Edit
            </button> */}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default UserInfo;
