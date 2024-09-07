import { useState } from "react";
import ProductsCards from "../ProductsCards/ProductsCards";
import "./ClothesData.css";
import useModal from "../../hooks/useModal";
import GenericModal from "../GenericModal/GenericModal";
import AddProductModal from "../AddProductModal/AddProductModal";
import { useLoginContext } from "../../context/LoginContext";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import { Navigate, useParams } from "react-router-dom";
import FilterData from "../FilterData/FilterData";
import { useFilterClothesByQuery } from "../../api/clothesApi";
import useFilterByColorAndSize from "../../hooks/useFilterByColorAndSize";

const COLORS = ["green", "black", "blue"];
const SIZES = ["L", "M", "S"];

const ClothesData = () => {
  const { clothesType } = useParams();
  const { currentUser } = useLoginContext();
  const [isShowingColors, setIsShowingColors] = useState(false);
  const [isShowingSizes, setIsShowingSizes] = useState(false);
  const { closeModal, isModalOpen, openModal } = useModal();
  const {
    checkIfColorOrSizeIsChecked,
    isColorChecked,
    isSizeChecked,
    setIsColorChecked,
    setIsSizeChecked,
  } = useFilterByColorAndSize();
  const { data: filteredClothes } = useFilterClothesByQuery(
    `type=${clothesType?.toLowerCase()}${checkIfColorOrSizeIsChecked()}`
  );
  const { currentItems, currentPage, itemsPerPage, paginate, setCurrentPage } =
    usePagination(filteredClothes ?? [], 8);

  const validClothesTypes = ["pants", "shirts", "hoodies", "shorts"];

  if (!validClothesTypes.includes(clothesType as string)) {
    return <Navigate to={"/notfound"} />;
  }

  return (
    <main className="ClothesTypesData">
      <div id="title">
        <h1>{clothesType}</h1>
        <p>{filteredClothes?.length} Products</p>
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
                hasColor
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
          <ProductsCards array={currentItems} showActions />
          <Pagination
            currentPage={currentPage}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredClothes?.length}
          />
        </div>
      </div>
    </main>
  );
};

export default ClothesData;
