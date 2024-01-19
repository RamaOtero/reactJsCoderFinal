
import React, {useContext} from 'react'
import '../../App.css'
import { CartContext } from '../../context/CartContext';


const DeleteBttn = ({product}) => {
    
    const {count, setCount} = useContext(CartContext);
    const eliminar = () =>{
        count.products.filter((p)=> p.productId !== product.id)
            setCount(() => ({
            qtyItems: 0,
                products:[],
                }))  
     }
       
       

              
    return (
        <div>
            <button className="buttonDelete" product={product} onClick={eliminar}>Delete</button>
        </div>
    )}
 
export default DeleteBttn;