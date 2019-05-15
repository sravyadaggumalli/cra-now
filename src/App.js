import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import RouterListener from "./components/RouteListener";
import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";

class App extends Component {
  render() {
    return (
      <Router>
        <RouterListener>
          <div className="App">
            <header className="App-header">
              <div id="lp-chat" />
              <ul>
                <li>
                  <Link to="/" className="App-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="App-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/topics" className="App-link">
                    Topics
                  </Link>
                </li>
              </ul>

              <hr />

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
            </header>
          </div>
        </RouterListener>
      </Router>
    );
  }
}

export default App;
