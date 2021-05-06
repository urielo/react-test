import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "../App.css";
import logo from "../logo.svg";

class Home extends React.Component {
  super(props) {
    this.props = props;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link to="/teste">go to teste</Link>
          </a>
        </header>
      </div>
    );
  }
}

export default withRouter(Home);
