import React, { useState } from 'react'

const CartBtn = ({ product, onCartUpdate }) => {
    const [cart, setCart] = useState(product.inCart);

    const handleClick = () => {
        const updatedProduct = { ...product, inCart: !cart };
        setCart(!cart);
        onCartUpdate(updatedProduct);
      };
    
  return (
      <button className='btn border border-black cartbtn' onClick={handleClick}>{ cart?"Remove from Cart":"Add to Cart" }</button>
  )
}

export default CartBtn