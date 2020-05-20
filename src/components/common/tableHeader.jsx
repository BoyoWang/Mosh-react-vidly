import React from "react";

const TableHeader = (props) => {
  const { sortColumn, onSort, columns } = props;

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

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.label || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
          </th>
        ))}
        {/* <th onClick={() => raiseSort("title")}>Title</th>
        <th onClick={() => raiseSort("genre.name")}>Genere</th>
        <th onClick={() => raiseSort("numberInStock")}>Stock</th>
        <th onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
        <th></th>
        <th></th> */}
      </tr>
    </thead>
  );
};

export default TableHeader;
