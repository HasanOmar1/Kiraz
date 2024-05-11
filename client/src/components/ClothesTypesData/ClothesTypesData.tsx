import { useEffect, useRef, useState } from "react";
import * as Types from "../../types/ClothesTypes";
import FilterData from "../FilterData/FilterData";
import useFilteredArray from "../../hooks/useFilteredArray";
import ProductsCards from "../ProductsCards/ProductsCards";
import "./ClothesTypesData.css";
import useModal from "../../hooks/useModal";
import GenericModal from "../GenericModal/GenericModal";
import { useLocation } from "react-router-dom";
import { validateUrlInput } from "../../utils/ValidateUrl";
import { useAllClothesTypesContext } from "../../context/AllClothesTypesContext";
import AddProductModal from "../AddProductModal/AddProductModal";

type ClothesTypesDataProps = {
  text: string;
  array: Types.Clothes[];
};

const COLORS = ["green", "black", "blue"];
const SIZES = ["L", "M", "S"];

const ClothesTypesData = ({ text, array }: ClothesTypesDataProps) => {
  const [isShowingColors, setIsShowingColors] = useState(false);
  const [isShowingSizes, setIsShowingSizes] = useState(false);
  const { closeModal, isModalOpen, openModal } = useModal();
  const { addType, addTypeErrorMsg, setAddTypeErrorMsg } =
    useAllClothesTypesContext();
  const {
    filteredArray,
    isColorChecked,
    isSizeChecked,
    setIsColorChecked,
    setIsSizeChecked,
  } = useFilteredArray(array);

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemDefaultColorRef = useRef<HTMLSelectElement>(null);
  const itemDefaultSizeRef = useRef<HTMLSelectElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);
  const itemGreenImgRef = useRef<HTMLInputElement>(null);
  const itemBlackImgRef = useRef<HTMLInputElement>(null);
  const itemBlueImgRef = useRef<HTMLInputElement>(null);

  const { pathname } = useLocation();
  const path = pathname.split("/").join("");

  useEffect(() => {
    itemNameRef.current?.focus();
    setAddTypeErrorMsg("");
  }, [isModalOpen, setAddTypeErrorMsg]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <main className="ClothesTypesData">
      <div id="title">
        <h1>{text}</h1>
        <p>{filteredArray?.length} Products</p>
      </div>
      <div className="add-product-container" onClick={openModal}>
        <h1>+</h1>
      </div>
      <GenericModal closeModal={closeModal} isOpen={isModalOpen}>
        <AddProductModal
          addTypeErrorMsg={addTypeErrorMsg}
          handleOnSubmit={handleOnSubmit}
          itemBlackImgRef={itemBlackImgRef}
          itemBlueImgRef={itemBlueImgRef}
          itemDefaultColorRef={itemDefaultColorRef}
          itemDefaultSizeRef={itemDefaultSizeRef}
          itemGreenImgRef={itemGreenImgRef}
          itemNameRef={itemNameRef}
          itemPriceRef={itemPriceRef}
        />
      </GenericModal>
      <div className="data-container">
        <div className="filters">
          <p>FILTERS</p>
          <div className="filter-by">
            <div className="filter-container">
              <FilterData
                filterByText={"COLOR"}
                classNameCondition={isShowingColors}
                onClickFunction={() => setIsShowingColors((prev) => !prev)}
                panelOptions={COLORS}
                hasColor={true}
                isColorChecked={isColorChecked}
                isSizeChecked={isSizeChecked}
                setIsColorChecked={setIsColorChecked}
                setIsSizeChecked={setIsSizeChecked}
              />
              <FilterData
                filterByText={"SIZE"}
                classNameCondition={isShowingSizes}
                onClickFunction={() => setIsShowingSizes((prev) => !prev)}
                panelOptions={SIZES}
                hasColor={false}
                isColorChecked={isColorChecked}
                isSizeChecked={isSizeChecked}
                setIsColorChecked={setIsColorChecked}
                setIsSizeChecked={setIsSizeChecked}
              />
            </div>
          </div>
        </div>
        <ProductsCards array={filteredArray} />
      </div>
    </main>
  );
};

export default ClothesTypesData;
