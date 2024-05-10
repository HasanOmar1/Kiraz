import { useEffect } from "react";
import "./History.css";
import BagDetails from "../../components/BagDetails/BagDetails";
import { emptyBag, fastEmptyBag } from "../../utils/Assets";
import Pagination from "../../components/Pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import {
  useBagContext,
  useThemeContext,
  useLoginContext,
} from "../../utils/Context";

const History = () => {
  const { getThemeClassName } = useThemeContext();
  const { getBagHistory, userBagHistory } = useBagContext();
  const { currentUser } = useLoginContext();
  const { currentItems, currentPage, itemsPerPage, paginate, setCurrentPage } =
    usePagination(userBagHistory);

  useEffect(() => {
    getBagHistory();
  }, [currentUser]);

  const totalPaid = userBagHistory.reduce((acc, item) => {
    return acc + (item.price || 0);
  }, 0);

  return (
    <main className={`History Page ${getThemeClassName()}`}>
      {currentUser ? (
        <div className="title-container">
          <h3>
            You have {userBagHistory.length} items in your purchase history
          </h3>
          <p>
            You have paid: <span>${totalPaid}</span> in total
          </p>
        </div>
      ) : (
        <div className="title-container">
          <h3>Login to see your purchase history</h3>
        </div>
      )}

      <div className="big-container">
        {currentUser && userBagHistory.length > 0 ? (
          <>
            <BagDetails array={currentItems ?? currentUser?.bag} />
            <div className="page-number-container">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={userBagHistory.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </>
        ) : (
          <div className="no-items">
            <picture>
              <source srcSet={fastEmptyBag} type="image/webp" />
              <img src={emptyBag} alt="empty bag" />
            </picture>
          </div>
        )}
      </div>
    </main>
  );
};

export default History;
