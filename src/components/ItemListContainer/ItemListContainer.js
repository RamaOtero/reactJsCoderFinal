import React from 'react';
import "../../App.css";
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from "react";
import { productList } from '../Products/products'

const ItemListContainer = () => {
  
  return (
    <div className='ItemListContainer'>
        <div>
            <ItemList items={productList} />
        </div>
    </div>
  )
}

export default ItemListContainer