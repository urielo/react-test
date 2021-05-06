import { Component } from "react";
import { Link } from "react-router-dom";
import "./layout.scss";
import Button from "../Components/Button";
import router from "../router";

class Layout extends Component {
  super(props) {
    this.props = props;
  }
  render() {
    return (
      <div className="page">
        <div className="nav">
          {router
            .filter(({ isMenu }) => isMenu)
            .map(({ name, props: { path } }) => (
              <Link to={path}>{name}</Link>
            ))}

          <Button name="Logout" onClick={() => console.log("clicked")} />
        </div>
        <div className="content">{this.props.children}</div>
        <div className="footer">
          <p> text 1</p>
          <p> text 1</p>
          <p> text 1</p>
          <p> text 1</p>
          <p> text 1</p>
          <p> text 1</p>
          <p> text 1</p>
          <p> text 1</p>
          <p> text 1</p>
          <p> text 1</p>
          <p> text 1</p>
        </div>
      </div>
    );
  }
}

export default Layout;
