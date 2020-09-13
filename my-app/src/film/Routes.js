import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Index from "./home"
import logo from './public/img/logo.png'
import About from "./about"
import DaftarFilm from "./DaftarFilm"
import Login from './login'

export default function App() {
  return (
    <Router>

    <div className="header">
    <header>
    <img id="logo" src={logo} width="200px" />
    <nav>
    <ul class="navbar-nav ml-auto">
    <li class="nav-item active">
    <Link class="nav-link" to="/">Home</Link>
    </li>
    <li class="nav-item">
    <Link class="nav-link" to="/About">About</Link>
    </li>
    <li class="nav-item">
    <Link class="nav-link" to="/Movie-List">Movie List</Link>
    </li>
    <li class="nav-item">
    <Link class="nav-link" to="/Login">Login</Link>
    </li>
    </ul>
    </nav>
    </header>



            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/About" component={About}/>
            <Route path="/Movie-List" component={DaftarFilm}/>
            <Route path="/Login" component={Login}/>
            </Switch>
            </div>
            </Router>
            );
}