import { Link } from "react-router-dom";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import { useThemeContext } from "../../context/ThemeContext";
import { Clothes } from "../../types/ClothesTypes";
import "./SearchInfo.css";

type SearchInfoProps = {
  array: Clothes[];
  setIsResults: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

const colorToImg = (items: Clothes) => {
  return items.color === "green"
    ? items.greenImg
    : items.color === "black"
    ? items.blackImg
    : items.color === "blue"
    ? items.blueImg
    : "";
};

const SearchInfo = ({
  array,
  setIsResults,
  setSearchInput,
}: SearchInfoProps) => {
  const { theme } = useThemeContext();

  const closeSearchResults = () => {
    setIsResults(false);
    setSearchInput("");
  };

  return (
    <div className="SearchInfo">
      {array.map((items) => {
        return (
          <div key={items._id} className="list">
            <Link to={`/product/${items._id}`} onClick={closeSearchResults}>
              <img src={colorToImg(items)} alt="img" />
            </Link>
            <div className="list-data">
              <Link
                onClick={closeSearchResults}
                to={`/product/${items._id}`}
                className="link"
                style={{
                  color: theme === "dark" ? "white" : "black",
                }}
              >
                <p id="clothing-name">{items.name}</p>
              </Link>
              <div className="color-size">
                <p>
                  Color:
                  <span>{upperCaseLetter(items.color ?? "")}</span>
                </p>
                <p>
                  Size:
                  <span>{items.size}</span>
                </p>
              </div>
              <p>
                Type:
                <span>{upperCaseLetter(items.type ?? "")}</span>
              </p>
              <p>${items.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchInfo;
