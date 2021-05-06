import React from "react";
import { withRouter } from "react-router";

import "../App.css";

class Teste extends React.Component {
  super(props) {
    this.props = props;
  }
  render() {
    return (
      <div className="App">
        <h1 className="col"> Teste</h1>
        <h1 className="col"> Teste</h1>
      </div>
    );
  }
}

export default withRouter(Teste);
