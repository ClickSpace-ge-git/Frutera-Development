import React from 'react';
import './styles/productGrid.css'
import packPlum from "./images/packagedPlum.jpg"
import kurkisGareshe from "./images/kurkisGaresheChiri.jpg"
import qliavis from "./images/qliavisChiri.jpeg"
import LeftSide from "./leftSide"
import ProductCard from "./productCard";


export default function productGrid(){

    return(
        <div className="page">
            <div className="productdisplaygrid">

                <div className="left">
                    <LeftSide/>
                </div>
                
                <div className="mainGrid">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    
                </div>
            </div>
        </div>

    )

    

}