import { useState } from "react";
import "./Pagination.css";

type Props = {
  itemsPerPage?: number;
  totalItems?: number;
  paginate: (number: number) => void;
  currentPage: number;
};

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: Props) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil((totalItems || 0) / (itemsPerPage || 0));
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <div className="Pagination">
      {pageNumbers.map((number) => {
        return (
          <button
            key={number}
            className={`${currentPage === number && "activePage"}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
