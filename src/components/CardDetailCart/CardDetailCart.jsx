
import React from 'react'
import '../../App.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartDetailCard = ({product, qty}) => {

  const {count, setCount} = useContext(CartContext)

  return (
    <div>
        <div className='cartCard'>
                <img className='cartCardImg' src={product.image} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p>{qty.qty}</p>
            </div>
            <button onClick={()=>{
              setCount(
                count.products.filter(product => product.id !== count.products.productId )
              )
            }}>Delete</button>
        </div>
    </div>
  )
}

export default CartDetailCard