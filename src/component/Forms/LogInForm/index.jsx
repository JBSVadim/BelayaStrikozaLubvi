import React from 'react';
import Input from '../Input';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSchema'
import styles from './LogInForm.module.scss';
const initialValues = {
  email: '',
  password: '',
};

const LogInForm = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        console.log(formikProps);
        return (
          <Form className={styles.formWrapper}>
            <Input className={styles.inputHandler} name='email' placeholder='Email address' />
            <Input className={styles.inputHandler} name='password' type='password' placeholder='Password' />
            <Field className={styles.inputHandler} type='submit' value='Submit' />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
