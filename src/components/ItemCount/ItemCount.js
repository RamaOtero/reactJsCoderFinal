import {useState} from "react";
import "../../App.css";
import * as React from 'react';

const Counter = ({stock}) => {

    const [count, setCount] = useState (0);
    const [frase, setFrase] = useState ("");

    const sumar = () => {
        if (count == stock) {
            setFrase('Limite de stock')
        }
        else {
           setCount(count + 1);
           setFrase("");
        }
    }
    const restar = () => {
        if (count === 0) {
            setFrase('')
        }
        else{
            setCount(count - 1)
            setFrase("")
        }
    }


    return (

        <div className= 'counter'>
            <div className='counterNumero'>
            <button className='counterBttn' onClick={sumar}>+</button>
            <span>{count}</span>
            <button className='counterBttn' onClick={restar}>-</button>
            </div>
            <button className='counterBttn'>Add Cart</button>
            <div>
            {frase}
            </div>
        </div>
    )
}

export default Counter