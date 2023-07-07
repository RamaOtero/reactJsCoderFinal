import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail/ItemDetail';
import { traerProducto } from '../Products/products';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productListState, setProductListState] = useState([]);

    const { userID } = useParams();
    
    useEffect(() => {
      setTimeout (() => {
      traerProducto({userID})
        .then((res) => {
            console.log(res);
            setProductListState(res)
        })
        .catch((error) => console.error(error));
        }, 1000);    
        }, [userID]);
        
    return (
        <div>
                              
                <ItemDetail product={productListState} />
                
                
        </div>
    )}
 
export default ItemDetailContainer;