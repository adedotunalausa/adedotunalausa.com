import React from "react";
import "../App.css";
import Header from "./Header"
import Home from "./Home"
import Journal from "./Journal"
import Footer from "./Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/journal" exact component={Journal} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
