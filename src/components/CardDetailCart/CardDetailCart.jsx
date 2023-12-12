
import React, {useContext} from 'react'
import '../../App.css'
import DeleteBttn from './DeleteBttnCart'
import {doc, getFirestore, deleteDoc, collection} from 'firebase/firestore'
import { CartContext } from '../../context/CartContext';

const CartDetailCard = ({product, qty}) => {
  
  
  const {count} = useContext(CartContext);

  const productId = product.id

  return (
    <div>
        <div className='cartCard'>
                <img className='cartCardImg' src={product.image} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p>{qty.qty}</p>
            </div>
           <button onClick={ () => {
            product = count.map(productId)
            count.splice(product) 
           } }>delete</button>
        </div>
    </div>
  )
}

export default CartDetailCard