import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { validateUrlInput } from "../../utils/ValidateUrl";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import "./AddProductModal.css";
import {
  useAddClothesByTypeMutation,
  useUpdateClothesByTypeMutation,
} from "../../api/clothesApi";

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
  const [addTypeErrorMsg, setAddTypeErrorMsg] = useState("");
  const [addClothes] = useAddClothesByTypeMutation();
  const [updateProduct] = useUpdateClothesByTypeMutation();

  useEffect(() => {
    setAddTypeErrorMsg("");
  }, [setAddTypeErrorMsg]);

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemDefaultColorRef = useRef<HTMLSelectElement>(null);
  const itemDefaultSizeRef = useRef<HTMLSelectElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);
  const itemGreenImgRef = useRef<HTMLInputElement>(null);
  const itemBlackImgRef = useRef<HTMLInputElement>(null);
  const itemBlueImgRef = useRef<HTMLInputElement>(null);
  const path = pathname.split("/collection/").join("");

  const editOrAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const itemValues = {
      name: itemNameRef.current?.value,
      color: itemDefaultColorRef.current?.value.toLowerCase(),
      size: itemDefaultSizeRef.current?.value,
      price: parseInt(itemPriceRef.current?.value ?? "0"),
      greenImg: itemGreenImgRef.current?.value,
      blackImg: itemBlackImgRef.current?.value,
      blueImg: itemBlueImgRef.current?.value,
      type: path,
    };

    if (
      itemNameRef.current?.value.length !== 0 &&
      itemPriceRef.current?.value.length !== 0
    ) {
      if (
        validateUrlInput(itemValues.greenImg || "") ||
        validateUrlInput(itemValues.blackImg || "") ||
        validateUrlInput(itemValues.blueImg || "")
      ) {
        if (isAddProduct) {
          addClothes({
            type: path,
            data: itemValues,
          });
        } else {
          updateProduct({
            type: path,
            id: cardId ?? "",
            data: itemValues,
          });
        }
        closeModal();
      } else {
        setAddTypeErrorMsg("Invalid URL format for green / black / blue img");
      }
    } else {
      setAddTypeErrorMsg("Please fill all necessary fields");
    }
  };

  return (
    <div className="AddProductModal">
      <h3 id="modal-title">
        {isAddProduct ? <>Add Product</> : <>Edit Product</>}
      </h3>

      <p id="error-msg">{addTypeErrorMsg}</p>

      <form onSubmit={editOrAddProduct}>
        <div className="necessary-input">
          <input
            ref={itemNameRef}
            type="text"
            placeholder="Item Name*"
            defaultValue={cardName}
          />
        </div>

        <div>
          <label htmlFor="Size">Color: </label>
          <select ref={itemDefaultColorRef} defaultValue={cardColor}>
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
          <select ref={itemDefaultSizeRef} defaultValue={cardSize}>
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
        <div className="necessary-input">
          <input
            ref={itemPriceRef}
            type="number"
            placeholder="Item Price*"
            min={1}
            defaultValue={cardPrice}
          />
        </div>
        <input
          ref={itemGreenImgRef}
          type="text"
          placeholder="Green Img URL"
          className="green-img"
          defaultValue={cardGreenImg}
        />
        <input
          ref={itemBlackImgRef}
          type="text"
          placeholder="Black Img URL"
          defaultValue={cardBlackImg}
        />
        <input
          ref={itemBlueImgRef}
          type="text"
          placeholder="Blue Img URL"
          className="blue-img"
          defaultValue={cardBlueImg}
        />

        <button type="submit" className="submit-btn">
          {isAddProduct ? <>Add Product</> : <>Confirm Edit</>}
        </button>
      </form>
    </div>
  );
};

export default AddProductModal;
