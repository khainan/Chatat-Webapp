import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import ResetPassword from './pages/ResetPassword';
import RegisterPage from './pages/RegisterPage';

function UnAuthenticatedApp() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage}/>
      <Route path="/reset-password" component={ResetPassword}/>
      <Route path="/register" component={RegisterPage}/>
    </Router>
  );
}

export default UnAuthenticatedApp;
