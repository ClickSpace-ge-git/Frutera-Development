import AboutUsPage from './frutera/AboutUsPage/AboutUsPage'
import HomePage from './frutera/HomePage/HomePage'
import Blogs from './frutera/BlogPage/Blogs';
import Product from './frutera/ProductsPage/product';
import CartPage from "./frutera/CartPage/CartPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/aboutus' element={<AboutUsPage/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/products' element={<Product/>}/>
             <Route path='/cart' element={<CartPage/>}/>
         </Routes>
      </BrowserRouter>
   );
}
