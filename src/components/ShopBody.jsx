import React from 'react'
import Header from './Header'
import ProductsContainer from './ProductsContainer'

// ShopBody component   
const ShopBody = ({products}) => {
    return (
      <>
      <div className='container'>
                <Header />
                <ProductsContainer products={products} />
            </div>
            
      </>
  )
}

export default ShopBody