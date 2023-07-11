import React from 'react'
import {doc, getDoc, getFirestore, updateDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [category, setCategory] = React.useState();
    const [name, setName] = React.useState();
    const [info, setInfo] = React.useState();
    const [price, setPrice] = React.useState();
    const [stock, setStock] = React.useState();
    const [productData, setProductData] = React.useState();
 
    const { userID } = useParams();

    React.useEffect(() => {
        const db = getFirestore();
              const productCollection = doc(db, "products", userID)
              getDoc(productCollection)
              .then((snapshot) => {
                setProductData({ id: snapshot.id, ...snapshot.data() });
              });
    }, [userID])

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleStockChange = (e) => {
        setStock(e.target.value);
    }
    const handleInfoChange = (e) => {
        setInfo(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const handleSubmit = () => {
        const newProduct = {
            category,
            name,
            info,
            price,
            stock
        }

        const db = getFirestore();
        const updateProductCollection = doc(db, "products", userID)
        updateDoc(updateProductCollection, newProduct).then(res => console.log(res));


    }

  return (
    <div>
        <input type="text" onChange={(e) => handleCategoryChange(e)} placeholder='Category'/>
        <input type="text" onChange={(e) => handleNameChange(e)} placeholder='Name'/>
        <input type="text" onChange={(e) => handleStockChange(e)} placeholder='Stock'/>
        <input type="text" onChange={(e) => handleInfoChange(e)} placeholder='Info'/>
        <input type="text" onChange={(e) => handlePriceChange(e)} placeholder='Price'/>
        <button onClick={handleSubmit}>Modificar Producto</button>
    </div>
  )
}

export default UpdateProduct