import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { render } from "@testing-library/react";

class MovieDetails extends Form {
  state = {
    data: { title: "", numberInStock: "", rate: "", genre: "" },
    errors: {},
  };
  SelectGenre = "Select a genre";
  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().min(0).max(100).required().label("Number in Stock"),
    rate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),
  };
  doSubmit = () => {
    //Call the server
    console.log("Movie Added");
  };
  handleSave = () => {
    this.props.history.push("/Movies");
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", [this.SelectGenre, "Action", "Comedy", "Thriller"])}
          {this.renderInput("numberInStock", "Number in stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieDetails;
