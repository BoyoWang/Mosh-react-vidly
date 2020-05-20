import React from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

const MoviesTable = (props) => {
  const { movies, sortColumn, onLike, onDelete, onSort } = props;

  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genere" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

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
      <TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns} />
      <tbody>{movies.map((movie) => listItem(movie))}</tbody>
    </table>
  );
};

export default MoviesTable;
