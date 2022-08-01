import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "../common/like";
import Table from "../common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movie/${movie._id}`}>{movie.title}</Link>,
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => <Like onLiked={() => this.props.onLikeMovie(movie)} liked={movie.like} />,
    },
    {
      key: "delete",
      content: movie => (
        <button onClick={() => this.props.onDeleteMovie(movie)} className="btn btn-danger btn-sm">
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return <Table data={movies} columns={this.columns} sortColumn={sortColumn} onSort={onSort} />;
  }
}

export default MoviesTable;
