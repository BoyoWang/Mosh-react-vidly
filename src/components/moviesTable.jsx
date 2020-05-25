import React from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

const MoviesTable = (props) => {
  const { movies, sortColumn, onLike, onDelete, onSort } = props;

  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={"/movies/" + movie._id}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genere" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (item) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(item)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      data={movies}
      sortColumn={sortColumn}
      columns={columns}
      onSort={onSort}
    />
  );
};

export default MoviesTable;
