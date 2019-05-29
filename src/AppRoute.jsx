import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from './pages/LoginPage'

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={LoginPage} />
    </Router>
  );
}

export default AppRouter;