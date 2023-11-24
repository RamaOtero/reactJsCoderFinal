import React from 'react'
import {doc, getDoc, getFirestore, updateDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react'
import {addDoc, collection} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import appFirebase from '../credenciales';
import '../App.css';

const storage = getStorage(appFirebase);

const UpdateProduct = () => {
    const [category, setCategory] = useState();
    const [name, setName] = useState();
    const [info, setInfo] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [productData, setProductData] = useState();

    let urlImDesc;

    const fileHandler = async (e) => {
        //detect the file 
        const archivoI = e.target.files[0];
        //upload the file on the storage
        const refArchivo = ref(storage, `documentos/${archivoI.name}`);
        await uploadBytes(refArchivo, archivoI);
        // obtener url de la imagen
        urlImDesc = await getDownloadURL(refArchivo);
    }

 
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
              const productCollection = doc(db, "products", itemId)
              getDoc(productCollection)
              
              .then((snapshot) => {
                setProductData({ id: snapshot.id, ...snapshot.data() });
              });
    }, [itemId])

    

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

    const handleSubmit = async(e) => {
        const newProduct = {
            category,
            name,
            info,
            price,
            stock,
            image: urlImDesc
        }

        const db = getFirestore();
        const updateProductCollection = doc(db, "products", itemId)
        updateDoc(updateProductCollection, newProduct).then(res => console.log(res));


        try {

            await addDoc(collection(db, 'Asset'),
            {
                ...UpdateProduct
            })
    
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className='formCrearProduct'>
        <div className='crearProduct'>
            <div>
                <input className='input' type="text" onChange={(e) => handleNameChange(e)} placeholder='Name'/>
                <input className='input' type="text" onChange={(e) => handleCategoryChange(e)} placeholder='Category'/>
            </div>
                <input className='input inputInfo' type="text" onChange={(e) => handleInfoChange(e)} placeholder='Info'/>
            <div>
                <input className='input' type="text" onChange={(e) => handleStockChange(e)} placeholder='Stock'/>
                <input className='input' type="text" onChange={(e) => handlePriceChange(e)} placeholder='Price'/>
            </div>
        <input className='input' type="file" id='file' placeholder='Actualizar Imagen' onChange={fileHandler} />
        <button className='buttonI' onClick={handleSubmit}>Modificar Producto</button>
        </div>
    </div>
  )
}

export default UpdateProduct