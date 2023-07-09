import React, {useContext} from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { CartContext } from '../context/CartContext';

const Home = () => {

    const count = useContext(CartContext)

    return (
        <div className='App.css'>
            <ItemListContainer />
        </div>
    )
}

export default Home;