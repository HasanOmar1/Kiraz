import { useState } from "react";
import { BagItems } from "../types/ClothesTypes";

const usePagination = (array: BagItems[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = array.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (number: number) => {
    setCurrentPage(number);
  };

  return { paginate, itemsPerPage, currentPage, currentItems };
};

export default usePagination;
