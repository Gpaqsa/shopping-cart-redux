import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlices"; // Corrected import

const ProductsCard = (props) => {
  const { img, rating, title, price } = props;

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Pass props as the item
    const item = { ...props };
    console.log(item);
    dispatch(addItem(item)); // Dispatch action to add item to cart

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
    <>
      <div className="product_card">
        <figure>
          <img src={img} alt="item-img" />
        </figure>
        <strong className="rating">{rating}</strong>
        <h4 className="title">{title}</h4>
        <h3 className="price">₹ {price.toLocaleString()}</h3>
        <button
          type="button"
          className={`btn ${isAdded ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          {isAdded ? "Added" : "Add to cart"}
        </button>
      </div>
    </>
  );
};

export default ProductsCard;
