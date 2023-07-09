import React, { useContext, useState } from 'react'
import {CartContext} from "../../context/CartContext"
const CartButtons = () => {

    const [count, setCount] = useContext(CartContext)
    const [state, setState] = useState(0)

    const handleMoreClick = () => {
        setCount(count + 1);
        setState(state + 1);
    }

    const handleLessClick = () => {
        setCount(count - 1);
        setState(state - 1);
    }

  return (
    <div>
        <div>
            <button onClick={handleLessClick}>
                -
            </button>
            <span>{state}</span>
            <button  onClick={handleMoreClick}>
                +
            </button>
        </div>
        <div>
            <button>
                Agregar al Carrito
            </button>
        </div>
    </div>
  )
}

export default CartButtons