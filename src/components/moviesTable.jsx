import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, sortColumn, onLike, onDelete, onSort } = props;

  const raiseSort = (path) => {
    const newSortColumn = { ...sortColumn };
    if (newSortColumn.path === path) {
      newSortColumn.order = newSortColumn.order === "asc" ? "desc" : "asc";
    } else {
      newSortColumn.path = path;
      newSortColumn.order = "asc";
    }

    onSort(newSortColumn);
  };
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
          <th onClick={() => raiseSort("title")}>Title</th>
          <th onClick={() => raiseSort("genre.name")}>Genere</th>
          <th onClick={() => raiseSort("numberInStock")}>Stock</th>
          <th onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{movies.map((movie) => listItem(movie))}</tbody>
    </table>
  );
};

export default MoviesTable;
