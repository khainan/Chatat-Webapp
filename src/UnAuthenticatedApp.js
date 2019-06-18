import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch} from "react-router";
import LoginPage from './pages/LoginPage';
import ResetPassword from './pages/ResetPassword';
import RegisterPage from './pages/RegisterPage';

function UnAuthenticatedApp({onNotify}) {

  const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      <Component {...props} onNotify={onNotify} />
    )} />
    )
  
  return (
    <Router>
      <Switch>
            <PublicRoute exact path="/" component={LoginPage} />
            <PublicRoute path="/reset-password" component={ResetPassword}/>
            <PublicRoute path="/register" component={RegisterPage}/>
      </Switch>
    </Router>
  );
}

export default UnAuthenticatedApp;
