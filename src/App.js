import AboutUsPage from './frutera/AboutUsPage/AboutUsPage'
import HomePage from './frutera/HomePage/HomePage'
import BlogPage from './frutera/BlogPage/BlogPage';
import Product from './frutera/ProductsPage/product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<div className='App'><HomePage/></div>}/>
            <Route path='/aboutus' element={<div className='App'><AboutUsPage/></div>}/>
            <Route path='/blog' element={<div className='App'><BlogPage/></div>}/>
            <Route path='/product' element={<div className='App'><Product/></div>}/>
         </Routes>
      </BrowserRouter>
   );
}