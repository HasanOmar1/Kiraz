import { useLoginContext, useThemeContext } from "../../utils/Context";
import "./Bag.css";
import { emptyBag, fastEmptyBag } from "../../utils/Assets";
import BagDetails from "../../components/BagDetails/BagDetails";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import usePagination from "../../hooks/usePagination";

const Bag = () => {
  const { getThemeClassName } = useThemeContext();
  const { currentUser } = useLoginContext();
  const { currentItems, currentPage, itemsPerPage, paginate, setCurrentPage } =
    usePagination(currentUser?.bag || [], 4);
  const navigate = useNavigate();

  const goToPurchaseHistory = () => {
    navigate(`/history`);
  };

  return (
    <div className={`Bag Page ${getThemeClassName()}`}>
      {currentUser?.bag.length !== 0 && (
        <div className="history-btn" onClick={goToPurchaseHistory}>
          Purchase History
        </div>
      )}
      <>
        {currentUser && (
          <div className="data-container">
            {currentUser.bag.length === 0 ? (
              <>
                <div
                  className="history-btn-empty"
                  onClick={goToPurchaseHistory}
                >
                  Purchase History
                </div>
                <div className="no-items">
                  <h3 id="empty">Your bag is empty</h3>
                  <picture>
                    <source srcSet={fastEmptyBag} type="image/webp" />
                    <img src={emptyBag} alt="empty bag" />
                  </picture>
                </div>
              </>
            ) : (
              <>
                <h3 id="my-items">My Items</h3>
                <BagDetails
                  currentUser={currentUser}
                  array={
                    currentUser?.bag.length <= 4
                      ? currentUser?.bag
                      : currentItems
                  }
                  showActions={true}
                />
                <div className="page-number-container">
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={currentUser?.bag.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </>
            )}
          </div>
        )}
      </>
    </div>
  );
};

export default Bag;
