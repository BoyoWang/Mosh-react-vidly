import React from "react";
import Like from "./like";

const TableBody = (props) => {
  const { data, onLike, onDelete } = props;

  const listItem = (item) => {
    const { title, numberInStock, dailyRentalRate, liked } = item;
    const genre = item.genre.name;

    return (
      <tr key={item._id}>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>
          <Like liked={liked} onClick={() => onLike(item)} />
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(item)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return <tbody>{data.map((item) => listItem(item))}</tbody>;
};

export default TableBody;
