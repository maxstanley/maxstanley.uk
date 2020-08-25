import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

import "./App.css";

import SideBar from "./components/sidebar/SideBar";

export default function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/setup.sh" component={ () => {
	    window.location.href = "https://raw.githubusercontent.com/maxstanley/dots/master/setup.sh";
	    return null;
	  }}/>
        </Switch>
      </HashRouter>
    </div>
  );
}
