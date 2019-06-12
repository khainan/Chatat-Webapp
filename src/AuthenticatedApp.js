import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from './pages/MainPage';
import Aset from './components/aset/Aset';
import CatatTransaksi from './components/CatatTransaksi';
import Setting from './pages/SettingUsaha';

function AuthenticatedApp() {
  return (
    <Router>
      <Route path="/setting-usaha" component={Setting}/>
      <Route path="/">
          <Route component={MainPage}/>
          <Route path="aset" component={Aset}/>
          <Route path="catat-transaksi" component={CatatTransaksi}/>   
      </Route>
    </Router>
  );
}

export default AuthenticatedApp;
