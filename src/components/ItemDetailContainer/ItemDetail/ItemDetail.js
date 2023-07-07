import '../../../App.css';
 /* import Counter from './itemCount2'; */
import * as React from 'react';


const ItemDetail = ({ product }) => {
    return (
        <div className="containerDetail">
            <div>
                <img src={product.image} alt={product.name} className="containerDetail__img" />
            </div>
            <div className="containerDetail__info">
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <h5>{product.info}</h5>
            </div>
        </div>
    )
}

export default ItemDetail