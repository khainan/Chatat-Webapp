import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import ResetPassword from './pages/ResetPassword';
import RegisterPage from './pages/RegisterPage';

function UnAuthenticatedApp(props) {

  return (
    <Router>
      <Route exact path="/" component={() => <LoginPage onNotify={props.onNotify}/>} />
      <Route path="/reset-password" component={() => <ResetPassword onNotify={props.onNotify}/>}/>
      <Route path="/register" component={() => <RegisterPage onNotify={props.onNotify}/>}/>
    </Router>
  );
}

export default UnAuthenticatedApp;
