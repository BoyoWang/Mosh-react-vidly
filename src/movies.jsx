import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  // handleDelete = movie => () {

  // }

  listItem(movie) {
    const { title, numberInStock, dailyRentalRate } = movie;
    const genre = movie.genre.name;

    return (
      <tr key={movie._id}>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
      </tr>
    );
  }

  render() {
    return (
      <table>
        <tbody>{this.state.movies.map((movie) => this.listItem(movie))}</tbody>
      </table>
    );
  }
}

export default Movies;
