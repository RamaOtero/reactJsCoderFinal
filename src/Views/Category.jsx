import React from "react";
import ItemList from "../components/ItemListContainer/ItemList/ItemList"
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import {collection, getDocs, getFirestore} from 'firebase/firestore'


const Category = () => {
const [productsData, setProductsData] = useState([])
const {categoryId} = useParams();
    

useEffect(() => {
    const db = getFirestore();
      const productCollection = collection(db, "products")
      getDocs(productCollection)
        .then((snapshot) => {
        const productsFilter = snapshot.docs.map((doc) => ({ 
            id: doc.id,
             ...doc.data(),
             }));
        setProductsData(
            productsFilter.filter((product) => product.category === categoryId)
        )
    });
  }, [categoryId]);


    return <div className='ItemListContainer category'><ItemList  items={productsData} /></div>
            
}

export default Category;