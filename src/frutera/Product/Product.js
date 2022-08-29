import React, {useEffect, useState} from 'react';
import './product.scss'
import LeftSide from "../components/Productleftside/LeftSide";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";
import Header2 from "../components/Header2/Header2";
import Footer from "../components/Footer/Footer";
import qliavis from "../../images/ProductPages/qliavisChiri.jpeg";
import {useMatch} from "react-router-dom";

let demoProductsList = [
    {
        id:"11",
        title:"Plums",
        text:"plums in 150g",
        price:"11.50",
        img:qliavis,
    },
    {
        id:"12",
        title:"Plums",
        text:"plums in 150g",
        price:"11.50",
        img:qliavis,
    },
    {
        id:"13",
        title:"Plums",
        text:"plums in 150g",
        price:"11.50",
        img:qliavis,
    },
]

export default function Product() {
    const [productsList, setProductsList] = useState({})
    const [loading, setLoading] = useState(true)

    const loadingPage = () => {
        setProductsList(demoProductsList)
        if( productsList!= null){
            setLoading(false)
        }
    }

    useEffect(() => {
        loadingPage()
    },[])



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
                        {!loading && productsList.length >0? productsList.map((item => <ProductCard key={item.id} props={item}/>)) : "" }
                    </div>


                </div>
            </div>
            <Footer/>
        </div>

    )
 }