import React from 'react';

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <div className='App.css'>
            <ItemListContainer greetings="| Welcome" />
        </div>
    )
}

export default Home;