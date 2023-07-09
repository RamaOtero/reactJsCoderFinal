import React from "react";
import ItemList from "../components/ItemListContainer/ItemList/ItemList.js"
import { productList } from '../components/Products/products.js'
import { useParams } from "react-router-dom";

const Category = () => {
    const {categoryId} = useParams();

    const productfilterByCategory = productList.filter((product) => product.category === categoryId)

    return <ItemList key={productfilterByCategory.id} items={productList} />
            
        
}

export default Category;