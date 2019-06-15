import React from 'react';
import './App.css';
import { Route, Switch} from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from './pages/MainPage';
import Aset from './components/aset/Aset';
import CatatTransaksi from './components/CatatTransaksi';
import Setting from './pages/SettingUsaha';

const PublicRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		<Component {...props} />
	)} />
  )

function AuthenticatedApp() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/setting-usaha" component={Setting}/>
        <PublicRoute exact path={["/", "/aset", "/catat-transaksi", "/daftar-transaksi", "/laporan-neraca", "/setting" ]} component={MainPage}/>
      </Switch>
    </Router>
  );
}

export default AuthenticatedApp;
