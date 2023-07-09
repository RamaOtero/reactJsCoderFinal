import { useContext } from 'react';
import './App.css';
import { CartProvider, CartContext } from './context/CartContext';
import MainRouter from './router/MainRouter';

function App() {

  return (
    <div>
        <CartProvider>
           <MainRouter />
        </CartProvider>
    </div>
  );
}

export default App;