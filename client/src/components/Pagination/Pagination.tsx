import { useState } from "react";
import "./Pagination.css";

type Props = {
  itemsPerPage?: number;
  totalItems?: number;
  paginate: (number: number) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  setCurrentPage,
}: Props) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil((totalItems || 0) / (itemsPerPage || 0));
    i++
  ) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const firstPage = currentPage === 1;

  const lastPage =
    currentPage === Math.ceil((totalItems || 0) / (itemsPerPage || 0));

  return (
    <div className="Pagination">
      {totalItems && itemsPerPage && totalItems > itemsPerPage && (
        <>
          {!firstPage && (
            <button onClick={prevPage} className="next-prev-btns prev-btn">
              Prev
            </button>
          )}

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
          {!lastPage && (
            <button onClick={nextPage} className="next-prev-btns next-btn">
              Next
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
