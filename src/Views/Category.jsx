import React from "react";
import ItemList from "../components/ItemListContainer/ItemList/ItemList"
import { productList } from '../components/Products/products.js'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Category = () => {

const {categoryId} = useParams();
    
const productfilterByCategory = productList.filter((product) => product.category === categoryId)

    return <div className="item-list"><ItemList  items={productfilterByCategory} /></div>
            
}

export default Category;