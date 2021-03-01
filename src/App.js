import React, {Component} from 'react';
import cx from 'classname';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './component/Header';
import LogInForm from './component/Forms/LogInForm';
import SignUpForm from './component/Forms/SignUpForm'
function App() {
  return (
    <div>
      <Header/>
      <SignUpForm/>
    </div>
  );
}

export default App;
