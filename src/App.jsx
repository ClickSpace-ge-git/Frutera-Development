import AboutUsPage from './frutera/AboutUsPage/AboutUsPage'
import HomePage from './frutera/HomePage/HomePage'
import ProductsPage from "./frutera/ProductsPage/ProductsPage"
import CartPage from "./frutera/CartPage/CartPage";
import LoginPage from "./frutera/LoginPage/LoginPage";
import RegisterPage from "./frutera/RegisterPage/RegisterPage.jsx";
import UserPage from './frutera/UserPage/UserPage'
import BlogsPage from './frutera/BlogsPage/BlogsPage.jsx';
import Blog from "./frutera/BlogPage/Blog";
import ProductPage from "./frutera/ProductPage/ProductPage";
import RouteProtector, {AdminRouteProtector} from "./frutera/components/RouteProtector/RouteProtector";
import AdminPage from "./frutera/AdminPage/AdminPage";
import LoadingPage from "./frutera/LoadingPage/LoadingPage";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.scss';
import ContactUsPage from "./frutera/ContactUs/ContactUsPage";
import {Suspense, useEffect} from "react";
import "../src/Utils/i18n.jsx"
import RulesAndConditionsPage from "./frutera/Legal Pages/RulesAndConditionsPage/RulesAndConditionsPage";
import PaymentsPage from "./frutera/Legal Pages/PaymentsPage/PaymentsPage";
import ConfidentialPage from "./frutera/Legal Pages/ConfidentialPage/ConfidentialPage";
import DeliveryPage from "./frutera/Legal Pages/DeliveryPage/DeliveryPage";

export default function App() {
    useEffect(() => {
        sessionStorage.setItem("token",JSON.stringify({accessToken:"none"}))
    },[])
    return (
        <Suspense fallback={<LoadingPage/>}>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<HomePage/>}/>
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
                    <Route path='/dashboard' element={
                        <AdminRouteProtector>
                            <AdminPage/>
                        </AdminRouteProtector>
                    }/>
                    <Route path='/contactus' element={<ContactUsPage/>}/>
                    <Route path='/terms&conditions' element={<RulesAndConditionsPage/>}/>
                    <Route path='/payments' element={<PaymentsPage/>}/>
                    <Route path="/confidential" element={<ConfidentialPage/>}/>
                    <Route path="/delivery" element={<DeliveryPage/>}/>
                    <Route path="*" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}
