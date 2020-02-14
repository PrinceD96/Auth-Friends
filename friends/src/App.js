import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
