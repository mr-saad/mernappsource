import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//pages
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Err404 from "./components/pages/404";
import Home from "./components/pages/Home";
import Registration from "./components/pages/Form/Registration";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/registration" component={Registration} />
        <Route component={Err404} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
