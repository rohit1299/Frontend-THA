import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route path="/home" exact component={Home} /> */}
          <Route path="/" exact>
            <Home />
            <div className="btn">
              <button
                onClick={() => {
                  setIsAuth(true);
                }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsAuth(false);
                }}
              >
                Logout
              </button>
            </div>
          </Route>
          <Route path="/about" component={About} />
          <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth} />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            isAuth={isAuth}
          />
        </Switch>
      </div>
    </Router>
  );
}
