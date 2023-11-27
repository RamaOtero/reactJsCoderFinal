import React, { useContext, useState } from 'react'
import {CartContext} from "../../context/CartContext"
import '../../App.css';

const CartButtons = ({productId}) => {

    const [state, setState] = useState(1)
    const {count, setCount} = useContext(CartContext)

    

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
    <div className='addCartBttns'>
        <div>
            <button className="bttnItem" onClick={handleLessClick}>
                -
            </button>
            <span>{state}</span>
            <button className="bttnItem"  onClick={handleMoreClick}>
                +
            </button>
        </div>
        <div>
            <button className="bttnItem" onClick={addToCart}>
                Agregar
            </button>
        </div>
    </div>
  )
}

export default CartButtons