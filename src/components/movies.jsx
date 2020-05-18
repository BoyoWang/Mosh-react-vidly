import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./listGroup";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movie.liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  listItem = (movie) => {
    const { title, numberInStock, dailyRentalRate, liked } = movie;
    const genre = movie.genre.name;

    return (
      <tr key={movie._id}>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <Like liked={liked} onClick={() => this.handleLike(movie)} />
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
  };

  infoText(itemsCount) {
    let textReturn = "No movies selected.";

    if (itemsCount !== 0) {
      textReturn = "Showing " + String(itemsCount) + " movies in the database.";
    }

    return textReturn;
  }

  render() {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      selectedGenre,
    } = this.state;

    const filtered = selectedGenre
      ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
      : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>{this.infoText(filtered.length)}</p>
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
            <tbody>{movies.map((movie) => this.listItem(movie))}</tbody>
          </table>
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
