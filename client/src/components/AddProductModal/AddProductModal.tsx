type AddProductModalProps = {
  addTypeErrorMsg: string;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  itemNameRef: React.RefObject<HTMLInputElement>;
  itemDefaultColorRef: React.RefObject<HTMLSelectElement>;
  itemDefaultSizeRef: React.RefObject<HTMLSelectElement>;
  itemPriceRef: React.RefObject<HTMLInputElement>;
  itemGreenImgRef: React.RefObject<HTMLInputElement>;
  itemBlackImgRef: React.RefObject<HTMLInputElement>;
  itemBlueImgRef: React.RefObject<HTMLInputElement>;
};

const AddProductModal = ({
  addTypeErrorMsg,
  handleOnSubmit,
  itemNameRef,
  itemDefaultColorRef,
  itemDefaultSizeRef,
  itemPriceRef,
  itemGreenImgRef,
  itemBlackImgRef,
  itemBlueImgRef,
}: AddProductModalProps) => {
  return (
    <>
      <h3 id="modal-title">Add Product</h3>

      <p id="error-msg">{addTypeErrorMsg}</p>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Item Name" ref={itemNameRef} />

        <div>
          <label htmlFor="Size">Color: </label>
          <select ref={itemDefaultColorRef}>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
          </select>
        </div>
        <div>
          <label htmlFor="Size">Size: </label>
          <select ref={itemDefaultSizeRef}>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <input
          type="number"
          placeholder="Item Price $"
          ref={itemPriceRef}
          min={1}
        />
        <input
          type="text"
          placeholder="Green Img URL"
          ref={itemGreenImgRef}
          className="green-img"
        />
        <input
          type="text"
          placeholder="Black Img URL"
          ref={itemBlackImgRef}
          className="black-img"
        />
        <input
          type="text"
          placeholder="Blue Img URL"
          ref={itemBlueImgRef}
          className="blue-img"
        />

        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </>
  );
};

export default AddProductModal;
