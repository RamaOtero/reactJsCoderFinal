import React, {useContext} from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { CartContext } from '../context/CartContext';
import Video from '../Assets/homeVideo2.mp4';

const Home = () => {

    const count = useContext(CartContext)

    return (
        <div className='App.css'>
            <div className='homeBanner'>
                <video src={Video}  width="100%" height="500" loop autoPlay playsInline muted></video>
                
            </div>
            <ItemListContainer />
            
        </div>
    )
}

export default Home;