import { useLoginContext } from "../../context/LoginContext";
import { useThemeContext } from "../../context/ThemeContext";
import "./Bag.css";
import emptyBag from "../../assets/empty-bag.png";
import BagDetails from "../../components/BagDetails/BagDetails";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import usePagination from "../../hooks/usePagination";

const Bag = () => {
  const { getThemeClassName } = useThemeContext();
  const { currentUser } = useLoginContext();
  const { currentItems, currentPage, itemsPerPage, paginate } = usePagination(
    currentUser?.bag || []
  );
  const navigate = useNavigate();

  const goToPurchaseHistory = () => {
    navigate(`/history`);
  };

  return (
    <div className={`Bag Page ${getThemeClassName()}`}>
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
                  <img src={emptyBag} alt="empty bag" />
                </div>
              </>
            ) : (
              <>
                <div className="history-btn" onClick={goToPurchaseHistory}>
                  Purchase History
                </div>
                <h3 id="my-items">My Items</h3>
                <BagDetails
                  array={currentItems ?? currentUser?.bag}
                  showActions={true}
                />
                <div className="page-number-container">
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={currentUser?.bag.length}
                    paginate={paginate}
                    currentPage={currentPage}
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
