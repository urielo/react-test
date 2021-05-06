import React from "react";
import "./button.scss";

const Button = ({ name, ...props }) => <button {...props}>{name}</button>;

export default Button;
