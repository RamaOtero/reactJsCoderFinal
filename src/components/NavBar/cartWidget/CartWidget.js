import React, {useContext, useEffect, useState} from 'react'
import cartImg from '../../../Assets/shopping-cart.png'
import { CartContext } from '../../../context/CartContext'
import {Link} from 'react-router-dom'

const CartWidget = () => {
  const [qty, setQty] = useState(0);
  const {count} = useContext(CartContext);

  useEffect(() => {
    setQty(count.products.reduce((total, product) => total + product.qty, 0))
  }, [count])

  return (
    <div>
      <Link to="/cart">
      <img alt='cart' src={cartImg} />
      <span>{qty}</span>
      </Link>
    </div>
    
  )
}

export default CartWidget