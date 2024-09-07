import { Link, useLocation } from "react-router-dom";
import "./Cards.css";
import {
  useAllClothesTypesContext,
  useLoginContext,
  useThemeContext,
} from "../../utils/Context";
import sizes from "../../utils/SizeLetterToWord";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import EditBtn from "../EditBtn/EditBtn";
import GenericModal from "../GenericModal/GenericModal";
import useModal from "../../hooks/useModal";
import AddProductModal from "../AddProductModal/AddProductModal";

type CardsProps = {
  cover?: string;
  name?: string;
  color?: string;
  price?: number;
  size?: string;
  id?: string;
  greenImg?: string;
  blackImg?: string;
  blueImg?: string;
  showActions?: boolean;
};

const Cards = ({
  cover,
  name,
  color,
  price,
  size,
  id,
  greenImg,
  blackImg,
  blueImg,
  showActions,
}: CardsProps) => {
  const { theme } = useThemeContext();
  const { pathname } = useLocation();
  const { deleteType } = useAllClothesTypesContext();
  const { currentUser } = useLoginContext();

  const {
    closeModal: closeDeleteModal,
    isModalOpen: isDeleteModalOpen,
    openModal: openDeleteModal,
  } = useModal();
  const {
    closeModal: closeEditModal,
    isModalOpen: isEditModalOpen,
    openModal: openEditModal,
  } = useModal();

  const greenColor = color === "green" && "activeColor";
  const blackColor = color === "black" && "activeColor";
  const blueColor = color === "blue" && "activeColor";

  const path = pathname.split("/collection/")[1];

  const deleteCard = (id: string) => {
    deleteType(path, id);
  };

  return (
    <div className="Cards">
      <Link to={`/product/${id}`}>
        <img
          src={cover}
          alt="img cover"
          width={280}
          height={"100%"}
          loading="lazy"
        />
      </Link>
      <div className="colors-container">
        {greenImg && <div className={`green ${greenColor}`}></div>}
        {blackImg && <div className={`black ${blackColor}`}></div>}
        {blueImg && <div className={`blue ${blueColor}`}></div>}
      </div>
      <Link
        to={`/product/${id}`}
        className="link"
        style={{ color: theme === "dark" ? "white" : "black" }}
      >
        <p id="clothing-name">{name}</p>
      </Link>
      <p id="size">{sizes(size)}</p>
      <p id="price">${price}</p>

      {showActions && currentUser?.isAdmin && (
        <div className="actions-container">
          <EditBtn onClick={openEditModal} />
          <DeleteBtn onClick={openDeleteModal} />
        </div>
      )}
      <GenericModal closeModal={closeDeleteModal} isOpen={isDeleteModalOpen}>
        <h3>Are you sure you want to delete this card:</h3>
        <div className="modal-btns">
          <button onClick={closeDeleteModal}>No</button>
          <button onClick={() => deleteCard(id ?? "")}>Yes</button>
        </div>
      </GenericModal>

      <GenericModal closeModal={closeEditModal} isOpen={isEditModalOpen}>
        <AddProductModal
          closeModal={closeEditModal}
          cardId={id}
          cardName={name}
          cardColor={color}
          cardGreenImg={greenImg}
          cardBlackImg={blackImg}
          cardBlueImg={blueImg}
          cardPrice={price}
          cardSize={size}
        />
      </GenericModal>
    </div>
  );
};

export default Cards;
