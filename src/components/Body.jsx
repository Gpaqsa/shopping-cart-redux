import React from 'react'
import ProductsCard from './ProductsCard';
import productsData from '../data/productsData.js'

// console.log(productsData)

const Body = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home_content">
            {productsData.map((item) => (
              <ProductsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Body