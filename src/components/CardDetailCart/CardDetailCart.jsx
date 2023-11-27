import React from 'react'
import '../../App.css'

const CartDetailCard = ({product, qty}) => {
  return (
    <div>
        <div className='cartCard'>
            
                <img className='cartCardImg' src={product.image} alt={product.name} />
            
            <div>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p>{qty.qty}</p>
            </div>
        </div>
    </div>
  )
}

export default CartDetailCard