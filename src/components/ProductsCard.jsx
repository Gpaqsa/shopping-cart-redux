import React from 'react'
import Card from './Card'

const ProductsCard = ({ productsData }) => {
  console.log(productsData)
  return (
    <div className='container'>
      <div className="home_content">
        {productsData.map((eachItem, index ) => (
          <Card key={index }  eachItem={ eachItem} />
        ))}
      </div>
      ProductsCard</div>
  )
}

export default ProductsCard