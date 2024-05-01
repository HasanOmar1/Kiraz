import { useEffect } from "react";
import { useBagContext } from "../../context/BagContext";
import { useThemeContext } from "../../context/ThemeContext";
import "./History.css";
import BagDetails from "../../components/BagDetails/BagDetails";
import { useLoginContext } from "../../context/LoginContext";
import emptyBag from "../../assets/empty-bag.png";

const History = () => {
  const { getThemeClassName } = useThemeContext();
  const { getBagHistory, userBagHistory } = useBagContext();
  const { currentUser } = useLoginContext();

  useEffect(() => {
    getBagHistory();
  }, []);

  return (
    <main className={`History Page ${getThemeClassName()}`}>
      {currentUser ? (
        <h3>You have {userBagHistory.length} items in your purchase history</h3>
      ) : (
        <h3>Login to see your purchase history</h3>
      )}

      <div className="big-container">
        {currentUser && userBagHistory.length > 0 ? (
          <BagDetails array={userBagHistory} />
        ) : (
          <div className="no-items">
            <img src={emptyBag} alt="empty bag" />
          </div>
        )}
      </div>
    </main>
  );
};

export default History;
