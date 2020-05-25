import React, { Component } from "react";

class MovieForm extends Component {
  state = {};

  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h2>{"Movie Form " + this.props.match.params._id}</h2>
        <button className="btn btn-primary btn-sm" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
