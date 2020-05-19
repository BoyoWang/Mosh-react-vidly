import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete } = props;

  const listItem = (movie) => {
    const { title, numberInStock, dailyRentalRate, liked } = movie;
    const genre = movie.genre.name;

    return (
      <tr key={movie._id}>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <Like liked={liked} onClick={() => onLike(movie)} />
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
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
      <tbody>{movies.map((movie) => listItem(movie))}</tbody>
    </table>
  );
};

export default MoviesTable;
