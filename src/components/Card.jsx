import React from 'react'
// import prod1 from "../../public/images/prod1.png"

const Card = ({ eachItem }) => {
    console.log(eachItem)
  return (
    <div className="product_card">
      <figure>
        <img src={eachItem.img} alt="item-img" />
      </figure>
      <strong className="rating">{eachItem.rating}</strong>
          <h4 className="title">{ eachItem.title}</h4>
          <h3 className="price">$ { eachItem.price}</h3>
      <button type="button" className="btn ">
        Add to cart
      </button>
    </div>
  );
}

export default Card