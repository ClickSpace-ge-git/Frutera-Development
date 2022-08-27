import React from 'react';
import './productGrid.scss'
import LeftSide from "../Productleftside/LeftSide"
import ProductCard from "../ProductCard/ProductCard";


export default function ProductGrid(){

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