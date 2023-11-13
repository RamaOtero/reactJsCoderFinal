import React from "react";
import '../../../../App.css';
import { Link } from "react-router-dom";
const Item = ({ item }) => {

    const { name, price, image } = item;

    return (
        <div className="item">
            <img src={image} alt={name} className="itemImg" />
            <h5> {name} </h5>
            <p> $ {price} </p>
            <div>
                <Link to={`/update-product/${item.id}`} className='navBar2__list--link'><button className="bttnItem">Update</button></Link>
                <button className="buttonDelete">Delete</button>
            </div>
        </div>
    );
};

export default Item;