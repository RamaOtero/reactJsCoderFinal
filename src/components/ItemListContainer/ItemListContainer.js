import React from 'react';
import "../../App.css";
import ItemList from './ItemList/ItemList.js';
//Importar para poder consumir la base de datos
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { useEffect, useState } from 'react';


//Cargamos la lista de productos desde firebase

const ItemListContainer = () => {
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    //seteamos la constante DataBase con la llamada a getFirestone() 
    const db = getFirestore();
    //seteamos productCollection con la coleccion que nos trajo collection() que dentro seteamos DB y el nombre de la Coleccion "products" (En este caso)
      const productCollection = collection(db, "products")
    //Mapeamos la coleccion, este codigo es para reutilizar, lo ideal sería armar un hook.  
      getDocs(productCollection).then((snapshot) => {
        setProductData(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);


  //Le pasamos a ItemList como parametro el productData con la informacion de firestore
  return (
    <div className='ItemListContainer'>
        <div>
            <ItemList items={productData} />
            
        </div>
    </div>
  )
}

export default ItemListContainer