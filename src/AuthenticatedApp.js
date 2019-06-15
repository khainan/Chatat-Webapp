import React from 'react';
import './App.css';
import { Route, Switch} from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from './pages/MainPage';
import Aset from './components/aset/Aset';
import CatatTransaksi from './components/CatatTransaksi';
import Setting from './pages/SettingUsaha';

function AuthenticatedApp({onNotify}) {
  const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      <Component {...props} onNotify={onNotify}/>
    )} />
    )
  return (
    <Router>
      <Switch>
        <PublicRoute path="/setting-usaha" component={Setting}/>
        <PublicRoute exact path={["/", "/aset", "/catat-transaksi", "/daftar-transaksi", "/neraca", "/setting", "/arus-kas", "/laba-rugi" ]} component={MainPage} />
      </Switch>
    </Router>
  );
}

export default AuthenticatedApp;
