import { useLoginContext } from "../../context/LoginContext";
import { useThemeContext } from "../../context/ThemeContext";
import "./Bag.css";
import emptyBag from "../../assets/empty-bag.png";
import BagDetails from "../../components/BagDetails/BagDetails";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

const Bag = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const { getThemeClassName } = useThemeContext();
  const { currentUser } = useLoginContext();
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = currentUser?.bag.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const goToPurchaseHistory = () => {
    navigate(`/history`);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
