import React from 'react'
import '../../App.css'

const CartDetailCard = ({product, qty}) => {
  return (
    <div className='cart'>
        <div className='cartCard'>
            
                <img className='cartCardImg' src={product.image} alt={product.name} />
            
            <div>
                <h2>{product.name}</h2>
                <p>{product.info}</p>
                <p>${product.price}</p>
                <p>{qty.qty}</p>
            </div>
        </div>
    </div>
  )
}

export default CartDetailCard