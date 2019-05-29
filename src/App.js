import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './pages/MainPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LoginPage}/>
      <Route path="/:currentPage" component={MainPage}/>
    </Router>
  );
}

export default App;
