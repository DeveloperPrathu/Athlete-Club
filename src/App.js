import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Dites from "./Diets";
import Services from "./Services";
import Home from "./Home";
import Gallery from "./Gallery";
import Premium from "./Premium";
import Contact from "./Contact-us";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

        <Route path="/premium">
            <Header />
            <Premium />
            <Footer />
          </Route>

        <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>

        <Route path="/gallery">
            <Header />
            <Gallery />
            <Footer />
          </Route>

          <Route path="/services">
            <Header />
            <Services />
            <Footer />
          </Route>

          <Route path="/dites">
            <Header />
            <Dites />
          </Route>

          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
