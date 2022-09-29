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
        if(sessionStorage.getItem("token") === null){
            sessionStorage.setItem("token",JSON.stringify({accessToken:"none"}))
        }
    },[])
    return (
        <Suspense fallback={<LoadingPage/>}>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<HomePage/>}/>
                    <Route path='/home' element={<HomePage/>}>
                    </Route>
                    <Route path='/aboutus' element={<AboutUsPage/>}>
                    </Route>
                    <Route path='/products' element={<ProductsPage/>}>
                    </Route>
                    <Route path='/cart' element={
                        <RouteProtector>
                            <CartPage/>
                        </RouteProtector>}>
                    </Route>
                    <Route path='/register' element={<RegisterPage/>}>
                    </Route>
                    <Route path='/login' element={<LoginPage/>}>
                    </Route>
                    <Route path='/blogs' element={<BlogsPage/>}>
                    </Route>
                    <Route path='/blogs/:blogId' element={<Blog/>}>
                    </Route>
                    <Route path='/user' element={
                        <RouteProtector>
                            <UserPage/>
                        </RouteProtector>}>
                    </Route>
                    <Route path='/products/:productId' element={<ProductPage/>}>
                    </Route>
                    <Route path='/dashboard' element={
                        <AdminRouteProtector>
                            <AdminPage/>
                        </AdminRouteProtector>
                    }>
                    </Route>
                    <Route path='/contactus' element={<ContactUsPage/>}>
                    </Route>
                    <Route path='/terms&conditions' element={<RulesAndConditionsPage/>}>
                    </Route>
                    <Route path='/payments' element={<PaymentsPage/>}>
                    </Route>
                    <Route path="/confidential" element={<ConfidentialPage/>}>
                    </Route>
                    <Route path="/delivery" element={<DeliveryPage/>}>
                    </Route>
                    <Route path="*" element={<HomePage/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}
