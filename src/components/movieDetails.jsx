import React, { Component } from "react";

class MovieDetails extends Component {
  handleSave = () => {
    this.props.history.push("/Movies");
  };
  render() {
    return (
      <div>
        <h1>Movie Form {this.props.match.params._id}</h1>
        <button onClick={this.handleSave} class="btn btn-primary btn-sm">
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
