import React from 'react'
import '../../App.css'
import eliminar from '../../Assets/eliminar.png'


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
            <button><img src={eliminar} /></button>
        </div>
    </div>
  )
}

export default CartDetailCard