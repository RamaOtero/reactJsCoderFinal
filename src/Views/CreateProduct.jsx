import React from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import appFirebase from '../credenciales';
import '../App.css';

const storage = getStorage(appFirebase);

const CreateProduct = () => {
    const [category, setCategory] = React.useState();
    const [name, setName] = React.useState();
    const [info, setInfo] = React.useState();
    const [price, setPrice] = React.useState();
    const [stock, setStock] = React.useState();
    

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
        const NewProduct = {
            category,
            name,
            info,
            price,
            stock,
            image: urlImDesc
        }

        const db = getFirestore();
        
        const newProductCollection = collection(db, "products")
        addDoc(newProductCollection, NewProduct).then(({id}) => console.log(id))


        // fucion de guardado 

    try {

        await addDoc(collection(db, 'Asset'),
        {
            ...NewProduct
        })

    } catch (error) {
        console.log(error);
    }

    }

  return (
    <div className='formCrearProduct'>
        <div className='crearProduct'>
            <div>
            <input autofocus required className='input' type="text" onChange={(e) => handleNameChange(e)} placeholder='Name'/>
            <input required className='input' type="text" onChange={(e) => handleCategoryChange(e)} placeholder='Category'/>
            </div>
            <input required className='input inputInfo' type="text" onChange={(e) => handleInfoChange(e)} placeholder='Info'/>
            <div>
            <input required className='input' type="number" min="1" onChange={(e) => handleStockChange(e)} placeholder='Stock'/>
            <input required className='input' type="number" min="2000" onChange={(e) => handlePriceChange(e)} placeholder='Price'/>
            </div>
            <input required className='input' type="file" id='file' placeholder='Agregar Imagen' onChange={fileHandler} />
            <button className='buttonI' onClick={handleSubmit}>Crear Producto</button>
        </div>
    </div>
  )
}

export default CreateProduct