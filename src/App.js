import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideBar from './components/SideBar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={LoginPage}/>
      <Route path={'/dashboard'} component={MainPage}/>
    </Router>
  );
}

export default App;
