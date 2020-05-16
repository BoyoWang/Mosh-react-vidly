import React, { Component } from "react";

class LikeButtom extends Component {
  state = { enable: false };

  enableState() {
    if (this.state.enable == true) {
      return (
        <i
          class="fa fa-heart"
          aria-hidden="true"
          onClick={this.handleClick}
        ></i>
      );
    } else {
      return (
        <i
          class="fa fa-heart-o"
          aria-hidden="true"
          onClick={this.handleClick}
        ></i>
      );
    }
  }

  handleClick = () => {
    const enable = this.state.enable == true ? false : true;
    this.setState({ enable });
  };

  render() {
    return this.enableState();
  }
}

export default LikeButtom;
