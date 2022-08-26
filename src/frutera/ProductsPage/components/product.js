import React from 'react';
import {useState} from 'react'
import './styles/product.css'
import packPlum from "./images/packagedPlum.jpg"
import kurkisGareshe from "./images/kurkisGaresheChiri.jpg"
import qliavis from "./images/qliavisChiri.jpeg"
import LeftSide from "./leftSide";
import ProductCard from "./productCard";
import ProductShowcase from "./productShowcase";



export default function product() {

    // const [isActive0, setActive0] = useState(false);
    // const [isActive1, setActive1] = useState(true);
    // const [isActive2, setActive2] = useState(false);
    // const [isActive3, setActive3] = useState(false);
    // const [isActive4, setActive4] = useState(false);
    // const [isActive5, setActive5] = useState(false);
    // const [isActive6, setActive6] = useState(false);

    // const toggleClass0 = () => {
    //     setActive0(!isActive0);
    //     setActive1(false);
    //     setActive2(false);
    //     setActive3(false);
    //     setActive4(false);
    //     setActive5(false);
    //     setActive6(false);
    // }
    // const toggleClass1 = () => {
    //     setActive1(!isActive1);
    //     setActive0(false);
    //     setActive2(false);
    //     setActive3(false);
    //     setActive4(false);
    //     setActive5(false);
    //     setActive6(false);
    // }
    // const toggleClass2 = () => {
    //     setActive2(!isActive2);
    //     setActive1(false);
    //     setActive0(false);
    //     setActive3(false);
    //     setActive4(false);
    //     setActive5(false);
    //     setActive6(false);
    // }
    // const toggleClass3 = () => {
    //     setActive3(!isActive3);
    //     setActive1(false);
    //     setActive2(false);
    //     setActive0(false);
    //     setActive4(false);
    //     setActive5(false);
    //     setActive6(false);
    // }
    // const toggleClass4 = () => {
    //     setActive4(!isActive4);
    //     setActive1(false);
    //     setActive2(false);
    //     setActive3(false);
    //     setActive0(false);
    //     setActive5(false);
    //     setActive6(false);
    // }
    // const toggleClass5 = () => {
    //     setActive5(!isActive5);
    //     setActive1(false);
    //     setActive2(false);
    //     setActive3(false);
    //     setActive4(false);
    //     setActive0(false);
    //     setActive6(false);
    // }
    // const toggleClass6 = () => {
    //     setActive6(!isActive6);
    //     setActive1(false);
    //     setActive2(false);
    //     setActive3(false);
    //     setActive4(false);
    //     setActive5(false);
    //     setActive0(false);
    // }





    









    return (
        <div className="page">
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
        </div>

    )
 }