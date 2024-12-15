import React from "react";
import ReactDOM from "react-dom";
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { band: props.band };
  }
  present() {
    return "Tôi có một  ${this.state.band}";
  }
  render() {
    return <h1>{this.present()}</h1>;
  }
}
