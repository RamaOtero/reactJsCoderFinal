import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail/ItemDetail';
import { traerProducto } from '../Products/products';
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [productListState, setProductListState] = useState([]);

    const { userID } = useParams();
    
   /* useEffect(() => {
      setTimeout (() => {
      traerProducto({userID})
        .then((res) => {
            console.log(res);
            setProductListState(res)
        })
        .catch((error) => console.error(error));
        }, 1000);    
        }, [userID]); */
        
        useEffect(() => {
            const db = getFirestore();
              const productCollection = doc(db, "products", userID)
              getDoc(productCollection)
              .then((snapshot) => {
                setProductListState({ id: snapshot.id, ...snapshot.data() });
              });
                }, [userID]);
        



    return (
        <div>
                              
                <ItemDetail product={productListState} />
                
                
        </div>
    )}
 
export default ItemDetailContainer;