import React from "react";
import "./App.css";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
 
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/"><Home /></Route>  
        <Route exact path="/about"><About /></Route>  
        <Route exact path="/projects"><Projects /></Route>  
        
        </Switch>
        {/* <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>

        <Route exact path={process.env.PUBLIC_URL + "/about"}>
          <About />
        </Route>

        <Route exact path={process.env.PUBLIC_URL + "/projects"}>
          <Projects />
        </Route> */}

        {/* <Route exact path="/contact">
       <Contact />
       </Route> */}
      </Router>
    </div>
  );
}

export default App;
