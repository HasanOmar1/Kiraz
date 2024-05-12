import { useEffect, useState } from "react";
import { BagItems } from "../types/ClothesTypes";

const usePagination = (array: BagItems[], itemsNumber: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(itemsNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = array.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (number: number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    if (currentItems.length === 0) {
      setCurrentPage((prev) => {
        if (prev !== 1) {
          return prev - 1;
        }
        return prev;
      });
    }
  }, [currentItems, setCurrentPage]);

  return { paginate, itemsPerPage, currentPage, currentItems, setCurrentPage };
};

export default usePagination;
