import React from "react";

const Card = ({ eachItem, onAddItem }) => {
  return (
    <div className="product_card">
      <figure>
        <img src={eachItem.img} alt="item-img" />
      </figure>
      <strong className="rating">{eachItem.rating}</strong>
      <h4 className="title">{eachItem.title}</h4>
      <h3 className="price">$ {eachItem.price}</h3>
      <button type="button" className="btn " onClick={onAddItem}>
        Add to cart
      </button>
    </div>
  );
};

export default Card;
