import React from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore';

const CreateProduct = () => {
    const [category, setCategory] = React.useState();
    const [name, setName] = React.useState();
    const [info, setInfo] = React.useState();
    const [price, setPrice] = React.useState();
    const [stock, setStock] = React.useState();

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
        const NewProduct = {
            category,
            name,
            info,
            price,
            stock
        }

        const db = getFirestore();
        const newProductCollection = collection(db, "products")
        addDoc(newProductCollection, NewProduct).then(({id}) => console.log(id))


    }

  return (
    <div>
        <input type="text" onChange={(e) => handleCategoryChange(e)} placeholder='Category'/>
        <input type="text" onChange={(e) => handleNameChange(e)} placeholder='Name'/>
        <input type="text" onChange={(e) => handleStockChange(e)} placeholder='Stock'/>
        <input type="text" onChange={(e) => handleInfoChange(e)} placeholder='Info'/>
        <input type="text" onChange={(e) => handlePriceChange(e)} placeholder='Price'/>
        <button onClick={handleSubmit}>Crear Producto</button>
    </div>
  )
}

export default CreateProduct