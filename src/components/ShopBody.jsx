import React from 'react'
import Header from './Header'
import ProductsContainer from './ProductsContainer'

// ShopBody component   
const ShopBody = ({products,cartItems,setCartItems,onCartUpdate}) => {
    return (
      <>
      <div className='container'>
                <Header />
                <ProductsContainer products={products} cartItems={cartItems} setCartItems={setCartItems} onCartUpdate={ onCartUpdate }/>
            </div>
            
      </>
  )
}

export default ShopBody