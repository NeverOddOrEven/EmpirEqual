import React, { Component } from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import MainLogo from '../assests/EmpirEqual_Login.svg';
import { Link } from 'react-router-dom';
import { EnterHolder, EnterButton, EnterFormHolder, EnterInput, EnterLabel } from '../styles/EnterStyled.js';

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <EnterFormHolder onSubmit={handleSubmit}>
    <EnterLabel>USERNAME</EnterLabel>
    <EnterInput
      type="username"
      name="username"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.username}
    />
    {touched.email && errors.email && <div>{errors.email}</div>}
    <EnterLabel>PASSWORD</EnterLabel>
    <EnterInput
      type="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    />
    {touched.password && errors.password && <div>{errors.password}</div>}
    <EnterButton type="submit" disabled={isSubmitting}>
      LOG IN
    </EnterButton>
    <NewAccountButton to="/signup">NEW ACCOUNT</NewAccountButton>
    <LoginLink to="/">FORGOT USERNAME</LoginLink>
    <LoginLink to="/">FORGOT PASSWORD</LoginLink>
  </EnterFormHolder>
);

// Wrap our form with the using withFormik HoC
const LoginForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ username: '', password: '' }),
  // Add a custom validation function (this can be async too!)

  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
    //LoginToMyApp(values).then(
      //user => {
        //setSubmitting(false);
        // do whatevs...
        // props.updateUser(user)
      //},
      //errors => {
        //setSubmitting(false);
        // Maybe even transform your API's errors into the same shape as Formik's!
        //setErrors(transformMyApiErrors(errors));
      //}
    //);
  },
})(InnerForm);

class Login extends Component {
  render() {
    return (
      <EnterHolder>
        <LoginImage src={MainLogo}/>
        <LoginForm />
      </EnterHolder>
    );
  }
}

export default Login;

const LoginImage = styled.img`
  width: 60%;
  height: auto;
  margin-bottom: 50px;
`

const LoginLink = styled.a`
  font-size: 16px;
  font-family: 'Myraid Pro', sans-serif;
  margin: 0;
  align-self: flex-end;
  margin-right: 2.5%;
  font-weight: 100;
  margin-bottom: 7px;
`

const NewAccountButton = styled(Link)`
  background-color: #00b9f1
  height: 60px;
  width: 95%;
  margin: 2.5%;
  font-size: 26px;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'myraid pro', sans-serif;
`
