import { useEffect, useState } from "react";
import ProductsCards from "../ProductsCards/ProductsCards";
import "./ClothesData.css";
import useModal from "../../hooks/useModal";
import GenericModal from "../GenericModal/GenericModal";
import AddProductModal from "../AddProductModal/AddProductModal";
import { useLoginContext } from "../../context/LoginContext";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import { useClothesContext } from "../../context/ClothesContext";
import { useParams } from "react-router-dom";
import FilterData from "../FilterData/FilterData";

const ClothesData = () => {
  const { clothesType } = useParams();
  const [isShowingColors, setIsShowingColors] = useState(false);
  const [isShowingSizes, setIsShowingSizes] = useState(false);
  const { closeModal, isModalOpen, openModal } = useModal();
  const { filterClothesByQuery, productsByFiltering, setProductsByFiltering } =
    useClothesContext();

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
      `type=${clothesType?.toLowerCase()}${checkIfColorOrSizeIsChecked()}`
    );

    return () => {
      setProductsByFiltering([]);
    };
  }, [isColorChecked, isSizeChecked, clothesType]);

  const checkIfColorOrSizeIsChecked = () => {
    let filterByColorAndSize = "";
    for (const color in isColorChecked) {
      if (isColorChecked[color as keyof typeof isColorChecked]) {
        filterByColorAndSize += `&color=${color}`;
      }
    }

    for (const size in isSizeChecked) {
      if (isSizeChecked[size as keyof typeof isSizeChecked]) {
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
        <h1>{clothesType}</h1>
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
            totalItems={productsByFiltering?.length}
          />
        </div>
      </div>
    </main>
  );
};

export default ClothesData;
