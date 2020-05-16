import React, { Component } from "react";

class Like extends Component {
  render() {
    let className = "fa fa-heart";
    className += this.props.liked === true ? "" : "-o";
    return (
      <i
        className={className}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
      ></i>
    );
  }
}

export default Like;
