import React, {useContext} from 'react'
import cartImg from '../../../Assets/shopping-cart.png'
import { CartContext } from '../../../context/CartContext'

const CartWidget = () => {

  const {count} = useContext(CartContext)

  return (
    <div>
      <span>{count.qtyItems}</span>
      <img alt='cart' src={cartImg} />
    </div>
    
  )
}

export default CartWidget