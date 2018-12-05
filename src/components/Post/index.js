import React, { Component, Fragment } from "react";

import "./style.css";

export default class Post extends Component {
  static defaultProps = {
    className: "post"
  };
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}
