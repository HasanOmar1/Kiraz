import { useLoginContext } from "../../context/LoginContext";
import { useThemeContext } from "../../context/ThemeContext";
import "./Bag.css";
import emptyBag from "../../assets/empty-bag.png";
import BagDetails from "../../components/BagDetails/BagDetails";

const Bag = () => {
  const { getThemeClassName } = useThemeContext();
  const { currentUser } = useLoginContext();

  return (
    <div className={`Bag Page ${getThemeClassName()}`}>
      <div className="big-container">
        {currentUser && (
          <div className="data-container">
            {currentUser.bag.length === 0 && (
              <div className="history-btn-empty">Purchase History</div>
            )}
            {currentUser.bag.length > 0 ? (
              <>
                <div className="history-btn">Purchase History</div>
                <h3 id="my-items">My Items</h3>
                <BagDetails currentUser={currentUser} />
              </>
            ) : (
              <div className="no-items">
                <h3 id="empty">Your bag is empty</h3>
                <img src={emptyBag} alt="empty bag" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
