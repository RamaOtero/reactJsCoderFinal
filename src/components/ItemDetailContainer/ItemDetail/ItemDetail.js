import '../../../App.css';
 /* import Counter from './itemCount2'; */
import DeleteBttn from '../DeleteBttn'
import * as React from 'react';
import {Link} from 'react-router-dom';
import CartButtons from '../../CartButtons/CartButtons';

const ItemDetail = ({ product }) => {
    return (
        <div className="containerDetail">
            <div>
                <img src={product.image} alt={product.name} className="containerDetail__img" />
            </div>
            <div className="containerDetail__info">
            <Link to="/"><button>cerrar</button></Link>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <h5>{product.info}</h5>
                <div className='containerDetail__bttns'>
                    <Link to={`/update-product/${product.id}`} className='navBar2__list--link'><button className="bttnItem">Update</button></Link>
                    <Link to="/"><DeleteBttn itemId={product.id} /></Link>
                </div>
            </div>
            <CartButtons productId={product.id}/>
        </div>
    )
}

export default ItemDetail