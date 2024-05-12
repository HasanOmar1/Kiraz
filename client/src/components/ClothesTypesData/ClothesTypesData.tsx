import { useState } from "react";
import * as Types from "../../types/ClothesTypes";
import FilterData from "../FilterData/FilterData";
import useFilteredArray from "../../hooks/useFilteredArray";
import ProductsCards from "../ProductsCards/ProductsCards";
import "./ClothesTypesData.css";
import useModal from "../../hooks/useModal";
import GenericModal from "../GenericModal/GenericModal";
import AddProductModal from "../AddProductModal/AddProductModal";
import { useLoginContext } from "../../context/LoginContext";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../hooks/usePagination";

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

  const {
    filteredArray,
    isColorChecked,
    isSizeChecked,
    setIsColorChecked,
    setIsSizeChecked,
  } = useFilteredArray(array);
  const { currentUser } = useLoginContext();

  const { currentItems, currentPage, itemsPerPage, paginate, setCurrentPage } =
    usePagination(filteredArray ?? [], 4);

  return (
    <main className="ClothesTypesData">
      <div id="title">
        <h1>{text}</h1>
        <p>{filteredArray?.length} Products</p>
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
        <div className="cards-container">
          <ProductsCards array={currentItems} />

          <Pagination
            currentPage={currentPage}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredArray?.length}
          />
        </div>
      </div>
    </main>
  );
};

export default ClothesTypesData;
