import React from "react";

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;

  console.log(itemsCount, pageSize);
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
