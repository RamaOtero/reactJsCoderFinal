import React from 'react';
import "../../App.css";
import ItemList from './ItemList/ItemList.js';
import { productList } from '../Products/products'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { useEffect, useState } from 'react';


const ItemListContainer = () => {
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
      const productCollection = collection(db, "products")
      getDocs(productCollection).then((snapshot) => {
        setProductData(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);

  return (
    <div className='ItemListContainer'>
        <div>
            <ItemList items={productData} />
        </div>
    </div>
  )
}

export default ItemListContainer