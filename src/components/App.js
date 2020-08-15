import React from 'react';
import '../App.css';
import Header from "./Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
