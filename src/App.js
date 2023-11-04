
import './App.css';
import { CartProvider } from './context/CartContext';
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