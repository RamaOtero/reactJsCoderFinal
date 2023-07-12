import React from 'react'

const CartDetailCard = ({product, qty}) => {
  return (
    <div>
        <div>
            <div>
                <img src={product.image} alt={product.name} />
            </div>
            <div>
                <h2>{product.name}</h2>
                <p>{product.info}</p>
                <p>precio: ${product.price}</p>
                <p>cantidad: {qty.qty}</p>
            </div>
        </div>
    </div>
  )
}

export default CartDetailCard