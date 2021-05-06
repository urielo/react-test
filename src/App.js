import { Switch, Route } from "react-router";
import Home from "./Pages/Home";
import { Component } from "react";
import Teste from "./Pages/Teste";
import Layout from "./Layout";
import routers from "./router";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {routers.map(({ props }) => (
            <Route {...props} />
          ))}
        </Switch>
      </Layout>
    );
  }
}

export default App;
