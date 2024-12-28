import React from 'react'
import ProductsCard from './ProductsCard';
import productsData from '../data/productsData.js'

// console.log(productsData)

const Body = () => {
  return (
    <section className='home' id='home'>
      <ProductsCard productsData={ productsData } />
    </section>
  );
}

export default Body