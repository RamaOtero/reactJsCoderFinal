
import React, {useContext} from 'react'
import {doc, getFirestore, deleteDoc} from 'firebase/firestore'
import '../../App.css'
import { CartContext } from '../../context/CartContext';
import { collection } from 'firebase/firestore';

const DeleteBttn = ({product}) => {

   

              
    return (
        <div>
            <button className="buttonDelete" onClick={(product) => {
                
                deleteDoc(product)
                .then(() => {
                    console.log("Entire Document has been deleted successfully.")
                })
                .catch(error => {
                    console.log(error);
                })
            }}>Delete</button>
        </div>
    )}
 
export default DeleteBttn;