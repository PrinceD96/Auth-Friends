import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li><Link to="/login">Login</Link></li>
            {/* <li><Link to="/">Home</Link></li> */}
          </ul>
        </header>

        <Route path="/login" component={Login} />

      </div>
    </Router>
  );
}

export default App;
