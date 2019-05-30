import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ResetPassword from './pages/ResetPassword';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage}/>
      <Route path="/reset-password" component={ResetPassword}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/main/:currentPage" component={MainPage}/>
    </Router>
  );
}

export default App;
