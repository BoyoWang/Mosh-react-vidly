import React from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

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

  return (
    <table className="table">
      <TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns} />
      <TableBody onLike={onLike} data={movies} onDelete={onDelete} />
    </table>
  );
};

export default MoviesTable;
