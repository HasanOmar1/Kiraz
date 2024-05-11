import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { validateUrlInput } from "../../utils/ValidateUrl";
import { useAllClothesTypesContext } from "../../context/AllClothesTypesContext";
import upperCaseLetter from "../../utils/UpperCaseLetter";

type AddProductModalProps = {
  closeModal: () => void;
  isAddProduct?: boolean;
  cardId?: string;
  cardName?: string;
  cardColor?: string;
  cardPrice?: number;
  cardSize?: string;
  cardGreenImg?: string;
  cardBlackImg?: string;
  cardBlueImg?: string;
};

const AddProductModal = ({
  closeModal,
  isAddProduct,
  cardId,
  cardName,
  cardColor,
  cardPrice,
  cardSize,
  cardGreenImg,
  cardBlackImg,
  cardBlueImg,
}: AddProductModalProps) => {
  const { pathname } = useLocation();
  const { addType, addTypeErrorMsg, setAddTypeErrorMsg, updateType } =
    useAllClothesTypesContext();
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [greenImgInput, setGreenImgInput] = useState("");
  const [blackImgInput, setBlackImgInput] = useState("");
  const [blueImgInput, setBlueImgInput] = useState("");

  useEffect(() => {
    setAddTypeErrorMsg("");
  }, [setAddTypeErrorMsg]);

  const path = pathname.split("/").join("");

  // const itemNameRef = useRef<HTMLInputElement>(null);
  const itemDefaultColorRef = useRef<HTMLSelectElement>(null);
  const itemDefaultSizeRef = useRef<HTMLSelectElement>(null);
  // const itemPriceRef = useRef<HTMLInputElement>(null);
  // const itemGreenImgRef = useRef<HTMLInputElement>(null);
  // const itemBlackImgRef = useRef<HTMLInputElement>(null);
  // const itemBlueImgRef = useRef<HTMLInputElement>(null);

  console.log(nameInput);

  // const itemValues = {
  //   name: itemNameRef.current?.value,
  // color: itemDefaultColorRef.current?.value.toLowerCase(),
  // size: itemDefaultSizeRef.current?.value,
  //   price: parseInt(itemPriceRef.current?.value ?? "0"),
  //   greenImg: itemGreenImgRef.current?.value,
  //   blackImg: itemBlackImgRef.current?.value,
  //   blueImg: itemBlueImgRef.current?.value,
  //   type: path,
  // };
  const itemValues = {
    name: nameInput,
    color: itemDefaultColorRef.current?.value.toLowerCase(),
    size: itemDefaultSizeRef.current?.value,
    price: priceInput,
    greenImg: greenImgInput,
    blackImg: blackImgInput,
    blueImg: blueImgInput,
    type: path,
  };

  const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      validateUrlInput(itemValues.greenImg || "") ||
      validateUrlInput(itemValues.blackImg || "") ||
      validateUrlInput(itemValues.blueImg || "")
    ) {
      addType(path, itemValues);
      closeModal();
      console.log(itemValues);
    } else {
      setAddTypeErrorMsg("Invalid URL format for green / black / blue img");
      console.log("Invalid URL format");
    }
  };

  const editProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateType(path, cardId ?? "", {
      name: nameInput,
      color: itemDefaultColorRef.current?.value.toLowerCase(),
      size: itemDefaultSizeRef.current?.value,
      price: priceInput,
      greenImg: greenImgInput,
      blackImg: blackImgInput,
      blueImg: blueImgInput,
      type: path,
    });
  };

  return (
    <>
      <h3 id="modal-title">
        {isAddProduct ? <>Add Product</> : <>Edit Product</>}
      </h3>

      <p id="error-msg">{addTypeErrorMsg}</p>
      <form onSubmit={isAddProduct ? addProduct : editProduct}>
        <input
          type="text"
          placeholder="Item Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNameInput(e.target.value)
          }
          value={nameInput !== "" ? nameInput : cardName}
        />

        <div>
          <label htmlFor="Size">Color: </label>
          <select ref={itemDefaultColorRef}>
            {!isAddProduct && (
              <option value={cardColor}>
                {upperCaseLetter(cardColor ?? "")}
              </option>
            )}
            {!(cardColor === "green") && <option value="Green">Green</option>}
            {!(cardColor === "black") && <option value="Black">Black</option>}
            {!(cardColor === "blue") && <option value="Blue">Blue</option>}
          </select>
        </div>
        <div>
          <label htmlFor="Size">Size: </label>
          <select ref={itemDefaultSizeRef}>
            {!isAddProduct && (
              <option value={cardSize}>
                {upperCaseLetter(cardSize ?? "")}
              </option>
            )}
            {!(cardSize === "S") && <option value="S">S</option>}
            {!(cardSize === "M") && <option value="M">M</option>}
            {!(cardSize === "L") && <option value="L">L</option>}
          </select>
        </div>
        <input
          type="number"
          placeholder="Item Price $"
          min={1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPriceInput(+e.target.value)
          }
          value={priceInput !== 0 ? priceInput : cardPrice}
        />
        <input
          type="text"
          placeholder="Green Img URL"
          className="green-img"
          value={greenImgInput !== "" ? greenImgInput : cardGreenImg}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGreenImgInput(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="Black Img URL"
          className="black-img"
          value={blackImgInput !== "" ? blackImgInput : cardBlackImg}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBlackImgInput(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="Blue Img URL"
          className="blue-img"
          value={blueImgInput !== "" ? blueImgInput : cardBlueImg}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBlueImgInput(e.target.value)
          }
        />

        <button type="submit" className="submit-btn">
          {isAddProduct ? <>Add Product</> : <>Confirm Edit</>}
        </button>
      </form>
    </>
  );
};

export default AddProductModal;
