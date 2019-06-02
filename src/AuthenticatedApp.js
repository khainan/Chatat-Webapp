import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from './pages/MainPage';
import Aset from './components/Aset';

function UnAuthenticatedApp() {
  return (
    <Router>
      <Route path="/">
          <Route component={MainPage}/>
          <Route path="aset" component={Aset}/>
      </Route>
    </Router>
  );
}

export default UnAuthenticatedApp;
