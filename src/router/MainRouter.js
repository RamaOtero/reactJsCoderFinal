import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Views/Home.js'
import AboutUs from '../Views/AboutUs.js';
import Contact from '../Views/Contact.js';
import News from '../Views/News.js';
import Cart from '../Views/Cart.jsx';
import NavBar from '../components/NavBar/NavBar2/NavBar2.js';
import ProductDetail from '../Views/ProductDetail.js';
import Category from '../Views/Category.jsx';
import CreateProduct from '../Views/CreateProduct.jsx';
import UpdateProduct from '../Views/UpdateProduct.jsx';
import Footer from '../components/Footer/Footer.jsx';


const MainRouter = () => {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/item/:itemId' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/:categoryId' element={<Category />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/update-product/:itemId' element={<UpdateProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
}

export default MainRouter;