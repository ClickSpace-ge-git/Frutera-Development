import React from 'react';
import './product.scss'
import LeftSide from "../components/Productleftside/LeftSide";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";
import Header2 from "../components/Header2/Header2";
import Footer from "../components/Footer/Footer";

export default function Product() {

    return (
        <div className="page">
            <Header2/>
            <div className="productdisplay">
                <div className="mainProduct">
                    <LeftSide/>
                    <ProductShowcase/>
                </div>
                <div className="recomended">
                    <h1 className="recomendedTop">Recomended products</h1>
                    <div className="cards">
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                    </div>


                </div>
            </div>
            <Footer/>
        </div>

    )
 }