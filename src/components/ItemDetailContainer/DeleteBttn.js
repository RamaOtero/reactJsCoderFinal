import {doc, getFirestore, deleteDoc} from 'firebase/firestore'
import React, { useEffect} from "react";
import '../../App.css'

const DeleteBttn = ({itemId}) => {

    
      /*  useEffect(() => {
            const db = getFirestore();
              const productCollection = doc(db, "products", itemId)
              deleteDoc(productCollection)
              .then(() => {
                  console.log("Entire Document has been deleted successfully.")
              })
              .catch(error => {
                  console.log(error);
              })
                }, [itemId]); */
    

              
    return (
        <div>
            <button className="buttonDelete" onClick={() => {
                const db = getFirestore();
                const productCollection = doc(db, "products", itemId)
                deleteDoc(productCollection)
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