import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch} from "react-router";
import LoginPage from './pages/LoginPage';
import ResetPassword from './pages/ResetPassword';
import RegisterPage from './pages/RegisterPage';

const PublicRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		<Component {...props} />
	)} />
  )

function UnAuthenticatedApp(props) {

  return (
    <Router>
      <Switch>
            <PublicRoute exact path="/" component={() => <LoginPage onNotify={props.onNotify}/>} />
            <PublicRoute path="/reset-password" component={() => <ResetPassword onNotify={props.onNotify}/>}/>
            <PublicRoute path="/register" component={() => <RegisterPage onNotify={props.onNotify}/>}/>
      </Switch>
    </Router>
  );
}

export default UnAuthenticatedApp;
