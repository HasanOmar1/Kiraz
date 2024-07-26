import { useEffect, useState } from "react";
import * as Types from "../../types/ClothesTypes";
// import useFilteredArray from "../../hooks/useFilteredArray";
import ProductsCards from "../ProductsCards/ProductsCards";
import "./ClothesTypesData.css";
import useModal from "../../hooks/useModal";
import GenericModal from "../GenericModal/GenericModal";
import AddProductModal from "../AddProductModal/AddProductModal";
import { useLoginContext } from "../../context/LoginContext";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import { useClothesContext } from "../../context/ClothesContext";
import NewFilterData from "../FilterData/NewFilterData";

type ClothesTypesDataProps = {
  text: string;
  array: Types.Clothes[] | null;
};

const NewData = ({ text, array }: ClothesTypesDataProps) => {
  const [isShowingColors, setIsShowingColors] = useState(false);
  const [isShowingSizes, setIsShowingSizes] = useState(false);
  const { closeModal, isModalOpen, openModal } = useModal();
  const { filterClothesByQuery, productsByFiltering } = useClothesContext();

  const [isColorChecked, setIsColorChecked] = useState({
    green: false,
    black: false,
    blue: false,
  });

  const [isSizeChecked, setIsSizeChecked] = useState({
    L: false,
    M: false,
    S: false,
  });

  const { currentItems, currentPage, itemsPerPage, paginate, setCurrentPage } =
    usePagination(productsByFiltering ?? [], 8);

  useEffect(() => {
    filterClothesByQuery(
      `type=${text.toLowerCase()}${checkIfColorOrSizeIsChecked()}`
    );
  }, [isColorChecked, isSizeChecked]);

  const checkIfColorOrSizeIsChecked = () => {
    let filterByColorAndSize = "";
    for (const color in isColorChecked) {
      if (isColorChecked[color]) {
        filterByColorAndSize += `&color=${color}`;
      }
    }

    for (const size in isSizeChecked) {
      if (isSizeChecked[size]) {
        filterByColorAndSize += `&size=${size}`;
      }
    }
    return filterByColorAndSize;
  };

  const { currentUser } = useLoginContext();

  const COLORS = ["green", "black", "blue"];
  const SIZES = ["L", "M", "S"];

  return (
    <main className="ClothesTypesData">
      <div id="title">
        <h1>{text}</h1>
        <p>{productsByFiltering?.length} Products</p>
      </div>
      {currentUser?.isAdmin && (
        <>
          <div className="add-product-container" onClick={openModal}>
            <h1>+</h1>
          </div>

          <GenericModal closeModal={closeModal} isOpen={isModalOpen}>
            <AddProductModal closeModal={closeModal} isAddProduct />
          </GenericModal>
        </>
      )}

      <div className="data-container">
        <div className="filters">
          <p>FILTERS</p>
          <div className="filter-by">
            <div className="filter-container">
              <NewFilterData
                filterByText={"COLOR"}
                classNameCondition={isShowingColors}
                onClickFunction={() => setIsShowingColors((prev) => !prev)}
                panelOptions={COLORS}
                hasColor
                isColorChecked={isColorChecked}
                isSizeChecked={isSizeChecked}
                setIsColorChecked={setIsColorChecked}
                setIsSizeChecked={setIsSizeChecked}
              />
              <NewFilterData
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
        <div className="cards-container">
          <ProductsCards array={currentItems} showActions />
          <Pagination
            currentPage={currentPage}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={productsByFiltering?.length}
          />
        </div>
      </div>
    </main>
  );
};

export default NewData;
