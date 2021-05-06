import React from "react";
import { withRouter } from "react-router";

import "../App.css";

class Teste2 extends React.Component {
  super(props) {
    this.props = props;
  }
  render() {
    return <div className="App">TeSte 2</div>;
  }
}

export default withRouter(Teste2);
