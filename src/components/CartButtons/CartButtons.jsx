import React, { useContext, useState } from 'react'
import {CartContext} from "../../context/CartContext"

const CartButtons = ({productId}) => {

    const [state, setState] = useState(0)
    const [count, setCount] = useContext(CartContext)

    

    const handleMoreClick = () => {
        if (state === 5) return;
        setState(state + 1)
    };

    const handleLessClick = () => {
        if (state === 1) return;
        setState(state - 1)
    }


    const addToCart = () => {
        const existingProduct = count.products.find(
            (p) => p.productId === productId
        );
        if (existingProduct) {
            existingProduct.qty += state;
        } else {
            const newProduct = {
                productId,
                qty: state,
            };
            setCount((prevState) => ({
                qtyItems: prevState.qtyItems + state,
                    products: [...prevState.products, newProduct],
            }));
        };
    };


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
            <button onClick={addToCart}>
                Agregar al Carrito
            </button>
        </div>
    </div>
  )
}

export default CartButtons