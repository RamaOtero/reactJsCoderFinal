import React from "react";
import Item from "./Item/Item";
import '../../../App.css';

import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return(
        <div className="item-list">
            {items.map((product) => {
                return (
                    <Link to={`/item/${product.id}`}><Item key={product.id} item={product} /></Link>
                )})}
        </div>
 )}

export default ItemList;