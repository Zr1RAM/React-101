import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// convention is to alias BrowserRouter as perhaps.. Router
// pages
import Home from "./Home";
import About from "./about";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./NavBar";
const ReactRouterSetup = () => {
  return (
    <>
      <h2>React Router</h2>
      <Router>
        <Navbar />
        {/* This way navbar will be present in all pages so that you can navigate
        wherever you want */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/person/:id" children={<Person />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default ReactRouterSetup;
