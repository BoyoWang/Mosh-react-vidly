import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  listItem(movie) {
    const { title, numberInStock, dailyRentalRate } = movie;
    const genre = movie.genre.name;

    return (
      <tr key={movie._id}>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <Like enable={false} />
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.handleDelete(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }

  infoText() {
    let textReturn = "No movies selected.";

    if (this.state.movies.length !== 0) {
      textReturn =
        "Showing " +
        String(this.state.movies.length) +
        " movies in the database.";
    }

    return textReturn;
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.infoText()}</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genere</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Like</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => this.listItem(movie))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
