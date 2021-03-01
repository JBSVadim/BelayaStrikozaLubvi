import React from 'react';
import Input from '../Input';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSchema'
import styles from './SignUpForm.module.scss';
import cx from 'classname';
const initialValues = {
  firstName: '',
  lastName: '',
  nickName: '',
  email: '',
  password: '',
  passwordConf: '',
};

const SignUpForm = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        console.log(formikProps);
        return (
          <Form className={styles.formWrapper}>
            <Input  name='firstName' placeholder='First Name' />
            <Input  name='lastName' placeholder='Surname' />
            <Input  name='nickName' placeholder='Display Name' />
            <Input  name='email' placeholder='Email address' />
            <Input  name='password' type='password' placeholder='Password' />
            <Input  name='passwordConf' type='password' placeholder='Confirm your Password' />
            <Field  type='submit' value='Submit' />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
