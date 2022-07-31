import React, { Component } from "react";

class MovieDetails extends Component {
  render() {
    return (
      <div>
        <h1>Movie: {this.props.match.params._id}</h1>
        <button type="button" class="btn btn-outline-primary">
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
