import AboutUsPage from './frutera/AboutUsPage/AboutUsPage'
import HomePage from './frutera/HomePage/HomePage'
import ProductsPage from "./frutera/ProductsPage/ProductsPage"
import CartPage from "./frutera/CartPage/CartPage";
import RegisterPage from './frutera/RegisterPage/RegisterPage'
import LoginPage from './frutera/LoginPage/LoginPage'
import UserPage from './frutera/UserPage/UserPage'
import BlogsPage from './frutera/BlogsPage/BlogsPage.js';
import Blog from "./frutera/BlogPage/Blog";
import Product from "./frutera/Product/Product";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/aboutus' element={<AboutUsPage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
             <Route path='/cart' element={<CartPage/>}/>
             <Route path='/register' element={<RegisterPage/>}/>
             <Route path='/login' element={<LoginPage/>}/>
             <Route path='/user' element={<UserPage/>}/>
             <Route path='/blogs' element={<BlogsPage/>}/>
             <Route path='/blog/:blogId' element={<Blog/>}/>
             <Route path='/products/:productId' element={<Product/>}/>
             <Route path='/category' element={<ProductsPage/>}/>
           </Routes>
      </BrowserRouter>
   );
}
