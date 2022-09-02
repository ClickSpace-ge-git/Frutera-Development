import AboutUsPage from './frutera/AboutUsPage/AboutUsPage'
import HomePage from './frutera/HomePage/HomePage'
import ProductsPage from "./frutera/ProductsPage/ProductsPage"
import CartPage from "./frutera/CartPage/CartPage";
import RegisterPage from './frutera/RegisterPage/RegisterPage'
import LoginPage from './frutera/LoginPage/LoginPage'
import UserPage from './frutera/UserPage/UserPage'
import BlogsPage from './frutera/BlogsPage/BlogsPage.jsx';
import Blog from "./frutera/BlogPage/Blog";
import ProductPage from "./frutera/ProductPage/ProductPage";
import RouteProtector from "./frutera/components/RouteProtector/RouteProtector";
import AdminPage from "./frutera/AdminPage/AdminPage";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.scss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/aboutus' element={<AboutUsPage/>}/>
                <Route path='/products' element={<ProductsPage/>}/>
                <Route path='/cart' element={
                    <RouteProtector>
                        <CartPage/>
                    </RouteProtector>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/blogs' element={<BlogsPage/>}/>
                <Route path='/blogs/:blogId' element={<Blog/>}/>
                <Route path='/user' element={
                    <RouteProtector>
                        <UserPage/>
                    </RouteProtector>
                }>
                </Route>
                <Route path='/products/:productId' element={<ProductPage/>}/>
                <Route path='/category' element={<ProductsPage/>}/>
                <Route path='/dashboard' element={
                    <RouteProtector>
                        <AdminPage/>
                    </RouteProtector>
                }/>
            </Routes>

        </BrowserRouter>
    );
}
