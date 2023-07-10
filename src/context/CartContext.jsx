import React, {useState} from 'react'


export const CartContext = React.createContext()

export const CartProvider = ({children}) => {

    const [count, setCount] = useState({count: 0, products: []})

  return (
    <CartContext.Provider 
    value={{count, setCount}}>{children}</CartContext.Provider>
  )
}
