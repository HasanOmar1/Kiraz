import "./Pagination.css";

type Props = {
  itemsPerPage?: number;
  totalItems?: number;
  paginate: (number: number) => void;
};

const Pagination = ({ itemsPerPage, totalItems, paginate }: Props) => {
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
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
