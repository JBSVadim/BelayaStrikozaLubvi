import React, {Component} from 'react';
import LogInForm from '../../component/Forms/LogInForm';
import Header from './../../component/'
const LogInPage = props => {
  return (
    <div>
      <Header/>
      <h1>LOGIN TO YOUR ACCOUNT</h1>
      <LogInForm />
    </div>
  );
}

export default LogInPage;
